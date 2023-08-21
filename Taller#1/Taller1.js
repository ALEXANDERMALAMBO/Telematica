const express =require("express")
const app=express();
const puerto =3000;

const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.sendFile(path.join
        (__dirname,'/formulario.html'));
});
