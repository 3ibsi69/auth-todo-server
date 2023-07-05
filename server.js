express=require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose')
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
)


app.listen(3636,()=>{
    console.log("server is running on 3636");
}) 