import express from "express";
import cors from "cors";
import router  from "./routes/index.js";

const app = express();
const port = process.env.port || 3002;

app.use(express.json());
app.use(cors());

app.use('/', (req,res, next) => {
 console.log("Requset aagai.." , req.query)
 if(req?.query?.apiKey === '12'){
    next()
 } else{
    res.status(401).send({message: "Not Allow"})
 }
})


app.use("/api", router)

app.listen(port, () => console.log('Server started'));