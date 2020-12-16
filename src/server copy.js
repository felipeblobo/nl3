// importar dependencia

const express = require('express');
const path = require('path');

// iniciando servidor
const server = express()
server
// utilizando arquivos estáticos
.use(express.static('public'))

// criar rota
server.get('/', (request,response) =>  {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))

})

// ligar servidor
server.listen(5500)