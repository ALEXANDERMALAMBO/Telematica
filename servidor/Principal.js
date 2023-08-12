// El modulo http esta integrado con node
const http = require("http");
const paquete=require("yosay")
const servidor = http.createServer

//cuando se crea un servidor siempre da un requerimiento 
//y una respuesta
const server=http.createServer((req,res)=>{
    res.end(paquete('Atendiendo una solicitud hola \n'));
})
//Nomenclatura
const puerto=3000;
//El listener u oyente espera la solicitud de al lado del cliente
server.listen(puerto, ()=>{
    
    console.log('\n',puerto)})