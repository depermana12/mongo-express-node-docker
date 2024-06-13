import "dotenv/config";
import connectDB from "./config/db.js";
import app from "./app.js";

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running server on port 3000");
});
