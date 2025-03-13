const http = require('http');
const meuhost = '127.0.0.1';
const porta=8000;

const requisicoes = ((req,res)=>{
    const url = req.url;
    const metodo = req.method
    if(url === '/' && metodo === 'GET'){
        res.setHeader('Set-Cookie', [
            'usuario=teste; HttpOnly', 
            'preferencia=amarelo; Max-Age=90'
          ]);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('COOKIE ENVIADO\n');

    } else if(url === '/pagina' && metodo === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>This is HTML</h1><h2>Pagina Html</h2></body></html>');
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('Nao tem pohha nenhuma\n');
    }
    
});

const servidor = http.createServer(requisicoes);
servidor.listen(porta, meuhost, ()=>{
    console.log(`Servidor rodando na porta http://${meuhost}:${porta}/`)
});