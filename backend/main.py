from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import tempfile
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/train")
async def train(
    file: UploadFile,
    problem_type: str = Form(...),  # "classification" or "regression"
    target_column: str = Form(...),
    automl_framework: str = Form(...)  # pycaret, evalml, h2o, flaml, autosklearn
):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as temp:
        temp.write(await file.read())
        temp_path = temp.name

    df = pd.read_csv(temp_path)
    os.remove(temp_path)

    try:
        X = df.drop(columns=[target_column])
        y = df[target_column]

        if automl_framework == "pycaret":
            if problem_type == "classification":
                from pycaret.classification import setup, compare_models, pull
            elif problem_type == "regression":
                from pycaret.regression import setup, compare_models, pull
            else:
                return JSONResponse(content={"error": "Unsupported problem type."}, status_code=400)

            setup(data=df, target=target_column, silent=True, verbose=False)
            best_model = compare_models()
            leaderboard = pull()
            metric = leaderboard.iloc[0, 1]
            return {
                "best_model": str(best_model),
                "Accuracy/Metric": round(metric, 4)
            }

        elif automl_framework == "evalml":
            from evalml.automl import AutoMLSearch
            if problem_type == "classification" and y.nunique() == 2:
                evalml_problem_type = "binary"
            elif problem_type == "classification":
                evalml_problem_type = "multiclass"
            elif problem_type == "regression":
                evalml_problem_type = "regression"
            else:
                return JSONResponse(content={"error": "Unsupported problem type."}, status_code=400)

            automl = AutoMLSearch(X=X, y=y, problem_type=evalml_problem_type, max_iterations=10)
            automl.search()
            return {
                "best_model": str(automl.best_pipeline),
                "Accuracy/Metric": round(automl.best_score, 4)
            }

        elif automl_framework == "h2o":
            import h2o
            from h2o.automl import H2OAutoML
            h2o.init()
            hf = h2o.H2OFrame(df)
            if problem_type == "classification":
                hf[target_column] = hf[target_column].asfactor()

            aml = H2OAutoML(max_models=5, seed=1)
            aml.train(y=target_column, training_frame=hf)
            best = aml.leader

            metric = best.auc() if problem_type == "classification" else best.rmse()
            h2o.shutdown(prompt=False)

            return {
                "best_model": str(best.algo),
                "Accuracy/Metric": float(metric)
            }

        elif automl_framework == "flaml":
            from flaml import AutoML
            automl = AutoML()
            automl.fit(
                X=X,
                y=y,
                task=problem_type,
                time_budget=60,
            )
            return {
                "best_model": automl.model.estimator.__class__.__name__,
                "Accuracy/Metric": round(automl.best_loss, 4)
            }

        elif automl_framework == "autosklearn":
            if problem_type == "classification":
                import autosklearn.classification
                clf = autosklearn.classification.AutoSklearnClassifier(time_left_for_this_task=60)
            elif problem_type == "regression":
                import autosklearn.regression
                clf = autosklearn.regression.AutoSklearnRegressor(time_left_for_this_task=60)
            else:
                return JSONResponse(content={"error": "Unsupported problem type."}, status_code=400)

            clf.fit(X, y)
            score = clf.score(X, y)
            return {
                "best_model": str(clf.show_models()),
                "Accuracy/Metric": round(score, 4)
            }

        else:
            return JSONResponse(content={"error": "Unsupported AutoML framework."}, status_code=400)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
