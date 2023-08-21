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

app.post('/',(req,res)=>{
    var mernsaje=req.body.msn;
    console.log(mernsaje)
    
    var fibo= parseInt(mernsaje);
    x=0;
    y=1;
    var z;
    vector=[];
    
    for (let index = 0; index < fibo; index++) {
        z=x+y;
        x=y;
        y=z;
    
        console.log(z)
        vector[index]=z;
    }
    console.log(vector)
    res.send('El mensaje era: '+vector);
});

app.listen(puerto,()=>{
    console.log("Ejecutando a willy")
})
/*
app.get('/curso',(req,res)=>{
    res.send("hola willy")
});

app.listen(puerto,()=>{
    console.log("ejecutando express");
});*/