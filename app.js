const express = require("express"),
app = express(),
bodyparser = require("body-parser"),
cors = require("cors");
const connectDB = require('./dbConfig');
const PORT = 3000;


connectDB();



app.use(bodyparser.json());
app.use(cors());

const employeRoutes = require("./router/index.router");

app.use("/api/employe", employeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
