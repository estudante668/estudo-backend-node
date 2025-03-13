const http = require('http');
const meuhost = '127.0.0.1';
const porta=8000;

const requisicoes = ((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Meu Primeiro servidor\n');
});

const servidor = http.createServer(requisicoes);
servidor.listen(porta, meuhost, ()=>{
    console.log(`Servidor rodando na porta http://${meuhost}:${porta}/`)
});