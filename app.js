const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('HOLA PERSONAS DE SONDA, SOY STEFAN Y TENGO MUCHO SUEÑO!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
