const http = require('http');

const server = http.createServer((req, res) => {
    res.end('voici la reponse de mon serveur')
})
server.listen(process.env.PORT || 3000)