express=require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose')
app.use(express.json());

const todoRouter=require("./Routers/TodoRouter");
const userRouter=require("./Routers/UserRouter");
const AdminRouter=require("./Routers/AdminRouter");

app.use(
    cors({
        origin: "*",
    })
)

app.use("/todo",todoRouter)
app.use("/user",userRouter)
app.use("/admin",AdminRouter)




app.listen(3636,()=>{
    console.log("server is running on 3636");
}) 