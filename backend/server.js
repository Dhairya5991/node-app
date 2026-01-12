const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.post('/contact',(req,res)=>res.json({success:true}));
app.listen(5000,()=>console.log('Backend running'));