import express from "express"

const app = express()

const PORT = process.env.PORT ?? 8000

app.get("/",(req,res)=>{
    return res.json({message : "Server is healthy, version 3.0", status : "Good"})
})

app.get("/home", (req,res)=>{
    return res.json({name : "Aslam"})
})

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))