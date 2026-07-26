console.log("Estoy ejecutando app.js");

const express = require("express");

const app = express();

const PORT = 4000;;

app.get("/", (req, res) => {
    res.send("🚀 Practica 2 - Cloud Native funcionando correctamente");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Servicio funcionando correctamente"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});