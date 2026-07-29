console.log("Estoy ejecutando app.js");

const express = require("express");
const client = require("prom-client");

const app = express();

const PORT = 4000;

// Métricas por defecto de Node.js
client.collectDefaultMetrics();

// Contador de peticiones HTTP
const httpRequests = new client.Counter({
    name: "http_requests_total",
    help: "Número total de peticiones HTTP"
});

app.use((req, res, next) => {
    httpRequests.inc();
    next();
});


app.get("/", (req, res) => {
    res.send("🚀 Practica 2 - Cloud Native funcionando correctamente");
});


app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Servicio funcionando correctamente"
    });
});


// Endpoint para Prometheus
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});