const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/todoRoutes");
const connectDB = require("./config/database");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
