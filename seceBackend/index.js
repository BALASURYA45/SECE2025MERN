const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const bcrypt = require('bcrypt');
const app=express()
const jwt = require('jsonwebtoken');

dotenv.config();
app.use(express.urlencoded());
 
app.use(express.json())

mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

const verifyToken=(req,res,next)=>{
    var token=req.headers.authorization
    if(!token){
        res.send("Request Denied")
}
try{
    const user=jwt.verify(token.process.env.SECRET_KEY)
    console.log(user)
    req.user=user
}
catch(error){
    console.log(error);
    res.send("Error in Token")
}

next();
}
app.get('/',(req,res)=>{
    res.send("hi!Welcome for backend implementation\n fellows");
    res.json({user: user})
})
app.get('/newPath',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/newPath2',(req,res)=>{
    res.json({"key":"index.html"});
})
app.get('/json',verifyToken,(req,res)=>{
    console.log("Inside Json Route");
    res.json({message:"This is a middleware check",user:req.user})
})

app.post("/signup", async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    var hashedPassword=await bcrypt.hash(password,10);
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hashedpassword
    });
    newCustomer.save();
    res.status(201).send("yooo!");
    console.log("value recived")
}catch(e){
    res.status(401).send("yooo!")
    console.log("unSuccessful")

}
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const payload={
                email:existingUser.email,
                username:existingUser.username
        }
        const user = await Signup.findOne({ email });
        const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const user_password=user.password;
        if (password!=user_password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/update",async(req,res)=>{
    const user=await Signup.findOneAndUpdate({firstname:"luffy"},{$set:{firstname:"Monkey D Luffy"}});
    res.json("record updated");
    user.save();
});
app.listen(3001,()=>{
    console.log("server is started");
    
})

