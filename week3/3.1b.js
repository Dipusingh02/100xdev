// const express =require("express");
// const app =express();
// app.use(express.json());
// app.post("/health-checkup",function(req,res){

//     const kidneys =req.body.kidneys;
   
//     const kidneyLength =kidneys.length;
//     res.send("you have" + kidneyLength +"kidneys"
//     );});
//     // golbal catches
//  middleware handle to error taking 4 input
//     app.use(function(err,req,res,next){
// errCount++;
// res.json({
//     msg:"wrong input"
// })
//     })

// app.listen(3000);
// const express =require("express");
// const app =express();
// app.use(express.json());
// app.post("/health-checkup",function(req,res){

//     const kidneys =req.body.kidneys;
//    if(!kidneys){
//     res.json({msg:"wrong valid"})
//    }else{
//     const kidneyLength =kidneys.length;
//     res.send("you have" + kidneyLength +"kidneys"
//     );}});
//     // golbal charches middleware handle to error taking 4 input
  

// app.listen(3000);


// zod
const express =require("express");
const zod= require("zod")
const app =express();

const kidneyschema = zod.array(zod.number());

app.use(express.json());
app.post("/health-checkup",function(req,res){

    const kidneys =req.body.kidneys;
   const response = kidneyschema.safeParse(kidneys);
    const kidneyLength =kidneys.length;
    res.send({response
    });});


app.listen(3000);