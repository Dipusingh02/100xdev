const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin1:Admin%401@cluster0.eyeswg2.mongodb.net/usernewd");

const app = express();
app.use(express.json());

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,  
});

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;  

    const existingUser = await User.findOne({ username: username });  // corrected field
    if (existingUser) {
        return res.status(403).json({
            msg: "User already exists",
        });
    }

    const user = new User({ name: name, username: username, password: password });
    await user.save();  

    res.json({
        msg: "User created successfully",
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
