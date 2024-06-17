import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import mongoose from "mongoose";
import "dotenv/config";

import connectDB from "../config/db.js";
import Tour from "../models/tourModel.js";

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, "tours-simple.json"), "utf-8")
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.log("Error ", error);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}
