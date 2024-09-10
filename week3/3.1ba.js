// const express =require("express");
// const zod= require("zod")
// const app =express();

// const schema =zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     Kidneys:z.array(z.number())
// })
// app.use(express.json());

// zod doesnot depend upnon express it is a  use for validation 
const zod= require("zod");
function ValidateInput(arr){
    const schema=zod.array(zod.number());
    const response =schema.safeParse(arr);
    console.log(response);

}
ValidateInput(["1",2,3]);