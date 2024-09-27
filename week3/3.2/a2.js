const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
// const jwtPassword = "123456";
mongoose.connect("mongodb+srv://admin1:Admin%401@cluster0.eyeswg2.mongodb.net/usernewd")
// const User = mongoose.model('User', { name: String ,email:String,password:String});

// const user = new User({ name: 'Dipu',email:"D@gmail.com",password:"123645" });
// // user.save().then(() => console.log('saved'));
// user.save();

const app=express();
app.use(express.json());

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
  });
app.post("/signup", async function(req,res){
    const username =req.body.username;
    const password = req.body.password;
    const name= req.boq.name; 

const exitingUser = await User.findOne({email:username});
if(exitingUser){
    return res.status(403).json({
        msg: "User already exists",
      });
}
const user = new User({name :name,username:username,password:password});

await user.save();
res.json({
    "msg":"user created succesfully"
})
})

app.listen(3000);