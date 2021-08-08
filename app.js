const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(port, () => {
    console.log(`Servidor Mercado-Liebre Corriendo en ${port}\ https://localhost:${port}`);
});