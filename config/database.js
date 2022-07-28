const mongoose = require("mongoose");

const {MONGO_URL} = process.env;

exports.connect = () => {
 //connecting to the DB
    mongoose
        .connect(MONGO_URL, {

            useNewurlparser: true,
            useUnifiedTopplogy: true,

        })

        .then(() =>{
            console.log("Connected to database Successfully");
        
        })

        .catch((error) => {
            console.log("Failed to connect to database!!");
            console.error(error);
            process.exit(1);

        });


};