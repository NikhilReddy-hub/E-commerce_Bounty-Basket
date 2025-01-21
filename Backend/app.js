const express = require('express')
const userRouter=require('./routes/users.routes.js');
const productRouter = require('./routes/Products.routes.js');

if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path : "BACKEND/.env",
    });
}
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Welcone to the backend")
})
app.use("/user",userRouter)
app.use('/product',productRouter)

module.exports = app;