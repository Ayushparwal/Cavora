import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const logChatMessage = async (
  userId: string,
  role: "user" | "assistant",
  content: string
) => {
  try {
    await addDoc(collection(db, "chats"), {
      userId,
      role,
      content,
      timestamp: Timestamp.now(),
    });
    console.log("✅ Chat saved successfully");
  } catch (error) {
    console.error("❌ Error saving chat:", error);
  }
};