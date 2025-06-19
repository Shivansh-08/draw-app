import express  from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.listen(3001);

app.post('/signup',(req,res)=>{
   const body = req.body;

})

app.post('/signin',(req,res)=>{


  const token=  jwt.sign({

    },JWT_SECRET)

    res.json({
        token
    })

})

app.post('/room',middleware,(req,res)=>{


})