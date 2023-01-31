import http from 'node:http';

import { json } from '../middlewares/json.js';

const users = [];

//Cabeçalho (Requisição/resposta) => Metadados 

const server = http.createServer(async (request, response) => {
       
  await json(request, response);

  if(request.method === 'GET' && request.url === '/users') {
    return response.end(JSON.stringify(users));
  }

  if(request.method === 'POST' && request.url === '/users') {
    const { name, email } = request.body;

    users.push({
      userId: 1,
      name,
      email
    });

    return response.end('Usuários cadastrados com sucesso');
  }

  return response.end('Url not allowed')
});

server.listen(3333)
