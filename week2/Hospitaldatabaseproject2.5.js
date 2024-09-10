const express =require("express");
// hospital project
const app =express();
app.listen(3000);
const users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json());
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberofKidneys =johnKidneys.length;
    let noofhealthyakidenys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if (johnKidneys[i].healthy) {
            noofhealthyakidenys=noofhealthyakidenys+1;
        }
    }
    const noofUnhealthyKidneys= numberofKidneys - noofhealthyakidenys;
    res.json({
        numberofKidneys,
        noofUnhealthyKidneys,
        noofhealthyakidenys
    })
    // console.log(johnKidneys);
})
app.post("/",function(req,res){
const isHealthy =req.body.isHealthy;
users[0].kidneys.push({
    healthy:isHealthy
})
res.json({
    msg:"DOne!"
})
})
app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy =true;
        }
        res.json({});
})
app.delete("/",function(req,res){
    // only if atleast one unhealthy kidenys is there  do this else reutn 411
    if(isThereatleastoneUnhealthyKidenys()){
    const newKindneys= [];
    for(let i=0; i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy) {
            newKindneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys =newKindneys;
        res.json({
            msg:'done'
        });}
        else{
            res.status(411).json({
                msg:"bad kidney"
            })
        }
})

function isThereatleastoneUnhealthyKidenys(){
    let atleastoneUnhealhyKidney =false;
    for(let i=0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneUnhealhyKidney =true;
        }
    }
    return atleastoneUnhealhyKidney
}