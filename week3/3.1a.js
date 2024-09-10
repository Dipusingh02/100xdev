const express = require("express");
const app = express();
function userMiddleware(req,res,next){
    if (username != "dipu" && password != "nandu") {
        res.status(400).json({
            msg: "somethings up with your inputs",
        });
        
        
    }else{
    next();    
    }
};
function kidneyMiddleware(req,res,next)
{
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "somethings up with your inputs",
        });
    }
    else{
        next();    }
};

app.get("/health-checkup", userMiddleware,kidneyMiddleware,function (req, res) {
    res.send("your heart is healthy");
});
app.listen(3000);