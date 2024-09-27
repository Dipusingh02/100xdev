const express=require("express")
const cors=require("cors")
const app =express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5500', 
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true
}));
app.get('/sum',async (req,res)=>{
   const a= parseInt(req.query.a);
   const b= parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());
});
app.get('/sum1',async (req,res)=>{
   const a= parseInt(req.body.a);
   const b= parseInt(req.body.b);
    const sum=a+b;
    res.send(sum.toString());
});
app.listen(8081)