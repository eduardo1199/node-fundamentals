import http from 'node:http';

const users = [];

//Cabeçalho (Requisição/resposta) => Metadados 

const server = http.createServer((request, response) => {

  if(request.method === 'GET' && request.url === '/users') {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }

  if(request.method === 'POST' && request.url === '/users') {
    users.push({
      userId: 1,
      username: 'Eduardo Soares',
      year: '2017'
    });

    return response.end('Usuários cadastrados com sucesso');
  }

  return response.end('Url not allowed')
});

server.listen(3333)
