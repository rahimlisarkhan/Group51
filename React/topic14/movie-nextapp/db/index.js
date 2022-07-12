import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getDatabase(app);