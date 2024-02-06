import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import dbconnection from './database/mongodb.js';
import userRoute from './routes/user.route.js';

dbconnection()
.then((res)=>{
    console.log("db connected");
    // console.log(res);
})
.catch(err=>{
    console.log("error",err);
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/user',userRoute);


app.listen(process.env.PORT,()=>{
    console.log('app starting at port 8080');
})