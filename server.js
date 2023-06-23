const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");


const app = express()
// const PORT process.env.PORT || 8000;
 
//connect to mongodb

mongoose
      .connect(process_env.MONGO_URI)
      .then(() => {
        app.listen(PORT, () => {
            console.log('server running on port ${PORT}')
        })

      })
      .catch((err) => console.log(err) ) 
    