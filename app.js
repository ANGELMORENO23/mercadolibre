const express = require("express")
const app = express();
const path = require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/ofertas",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/ofertas.html"));
});
app.get("/tiendas",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/tiendas.html"));
});
app.get("/vender",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/vender.html"));
});
app.get("/ayuda",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/ayuda.html"));
});
app.get("/micompra",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/micompra.html"));
});
app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registro.html"));
});
app.get("/ingresar",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/ingresar.html"));
});


app.use(express.static("public"));

app.listen(8000,()=>{
    console.log("servicio ubicado en http://localhost:8000/");
})