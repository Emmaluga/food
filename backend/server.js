require("dotenv").config();
const express = require("express");
const cors = require("cors");
const customErrHandler = require("./middleware/customErrHandler");
const customNotFound = require("./middleware/customPageNotFound");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/usersRoute");
const productRoute = require('./routes/productsRoute')
const CONNECTDB = require("./config/connectDB");

const app = express();

//express routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));

//routes
app.use('/api',authRoute);
app.use('/api',userRoute);
app.use( productRoute )

//custom middleware
app.use( customNotFound);
app.use(customErrHandler);

const port = process.env.port || 8080;

const startServer = async () => {
  try {
    CONNECTDB(process.env.connectdb);
    console.log("connected to db");
  } catch (error) {
    console.log(" failed to connected to db");
  }

  app.listen(port, () => console.log(`server running on port ${port}`));
};

startServer();
