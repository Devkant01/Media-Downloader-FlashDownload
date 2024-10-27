import mongoose from "mongoose";
import { Database } from "../config/config";

mongoose.connect(Database)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Connection Error");
    });

export { mongoose };