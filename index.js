const express = require('express');
const app= express();
const PORT=8000;

app.use(express.json())

app.post('/signup',(req,res) =>{
    const {username ,email,password,dob} = req.body
    if(!username){
        return res.status(400).json({message:"username not found"})
    }
    if(!email){
        return res.status(400).json({message:"email not found"})
    }
    if(!dob){
        return res.status(400).json({message:"dob not found"})
    }
    if(!password || password.length < 8 || password.length > 16){
        return res.status(400).json({message:"password not valid and it should be greater than 8 character or less than 16 character"})
    }
    res.status(200).json({message:"signup successful"})
})

app.get('/',(req,res)=>{
    res.send("welcome to signup page")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})