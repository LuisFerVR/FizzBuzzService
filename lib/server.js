const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola aqui");
});

app.listen(port, () =>{
    console.log(`ejemplo app iniciada en el puerto ${port}`);
});