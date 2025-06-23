import pandas as pd
from pycaret.classification import setup, compare_models, pull
from pycaret.regression import setup as reg_setup, compare_models as reg_compare_models
from pycaret.clustering import setup as clu_setup, create_model
import warnings

warnings.filterwarnings("ignore")

def run_automl(file_path: str, problem_type: str, target_column: str):
    df = pd.read_csv(file_path)

    if problem_type == "classification":
        setup(data=df, target=target_column, silent=True, verbose=False)
        best_model = compare_models()
        leaderboard = pull()
    elif problem_type == "regression":
        reg_setup(data=df, target=target_column, silent=True, verbose=False)
        best_model = reg_compare_models()
        leaderboard = pull()
    elif problem_type == "clustering":
        clu_setup(data=df, silent=True, verbose=False)
        model = create_model("kmeans")
        return {
            "model": str(model),
            "message": "Clustering model created (KMeans)"
        }
    else:
        return {"error": "Invalid problem type"}

    best_row = leaderboard.iloc[0]
    return {
        "best_model": best_row['Model'],
        "Accuracy/Metric": best_row.get('Accuracy') or best_row.get('R2'),
        "Details": best_row.to_dict()
    }
