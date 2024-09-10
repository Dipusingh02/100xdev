var con = require('./connection');
const express = require("express");
const app = express();
app.use(express.json());


// app.post("/signup", async function (req, res) {
//     const name = req.body.name;
//     const username = req.body.username;
//     const password = req.body.password;

//     try {
//         con.connect(function (error) {
//             if (error) {
//                 throw error;
//             }
//             console.log("Connected to the database");
//         });

//         const sqlCheck = "SELECT * FROM Newusers WHERE username = ?";
//         const existingUser = await new Promise((resolve, reject) => {
//             con.query(sqlCheck, [username], function (error, result) {
//                 if (error) {
//                     return reject(error);
//                 }
//                 resolve(result);
//             });
//         });

//         if (existingUser.length > 0) {
//             con.end();
//             return res.status(403).json({
//                 msg: "User already exists",
//             });
//         }

//         const sqlInsert = "INSERT INTO Newusers (name, username, password) VALUES (?, ?, ?)";
//         await new Promise((resolve, reject) => {
//             con.query(sqlInsert, [name, username, password], function (error, result) {
//                 if (error) {
//                     return reject(error);
//                 }
//                 console.log("1 record inserted");
//                 resolve(result);
//             });
//         });

//         con.end();

//         res.json({
//             msg: "User created successfully",
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             msg: "An error occurred",
//         });
//     }
// });


// app.post("/signin", async function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;
//     con.connect(function (error) {
//         if (error) throw error;
//         console.log("Connected to the database");
//         var sql = "SELECT * FROM Newusers WHERE username = ? AND password = ?";
//         con.query(sql, [username, password], function (error, result) {
//             if (error) throw error;
//             if (result.length) {
//                 res.json({
//                     msg: "User logged in successfully",
//                 });
//             } else {
//                 res.status(403).json({
//                     msg: "Invalid username or password",
//                 });
//             }
//         });
//         con.end();
//     });
// });


con.connect(function(error){
    if(error) throw error;
    console.log("Connected to the database");
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, filename VARCHAR(255), title VARCHAR(255), tags VARCHAR(255),author VARCHAR(255),year VARCHAR(255)";
    con.query(sql, function(error, result){
        if(error) throw error;
        console.log("Table created");
    });
    con.end();
})
app.listen(3000);