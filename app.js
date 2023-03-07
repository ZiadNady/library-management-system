const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./Routers/adminRouter");
const basicAdminRouter = require("./Routers/basicAdminRouter");
const bookRouter = require("./Routers/bookRouter");
const employeeRouter = require("./Routers/employeeRouter");
const loginRouter = require("./Routers/loginRouter");
const memberRouter = require("./Routers/memberRouter");
const authenticateMW = require("./Core/Auth/authenticateMW");
const server = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/LIBRARY_MANAGEMENT_SYSTEM")
  .then(() => {
    console.log("Database is connected");
    // Run the server
    server.listen(port, () => {
      console.log("Server is Running...");
    });
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

// Logging Middleware
server.use(morgan(":url :method"));

// CORS Middleware
server.use(cors());

// parse-data
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Routes
// server.use(loginRouter);
// server.use(authenticateMW);
// server.use(adminRouter);
// server.use(basicAdminRouter);
server.use(bookRouter)
// server.use(memberRouter);
// server.use(employeeRouter);

// Not Found Middleware
server.use((request, response) => {
  response.status(404).json({ data: "Route NOT FOUND" });
});

// Error handling Middleware
server.use((error, request, response, next) => {
  let status = error.status || 500;
  response.status(status).json({ message: error + "" });
});
