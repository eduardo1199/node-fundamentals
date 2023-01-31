import http from 'node:http';

import { Database } from './database/index.js';

import { json } from './middlewares/json.js';

const database = new Database();

//Cabeçalho (Requisição/resposta) => Metadados 

const server = http.createServer(async (request, response) => {
       
  await json(request, response);

  if(request.method === 'GET' && request.url === '/users') {
    const users = database.select('users')

    return response.end(JSON.stringify(users));
  }

  if(request.method === 'POST' && request.url === '/users') {
    const { name, email } = request.body;

    const user = {
      name,
      email
    }
    
    database.insert('users', user);

    return response.end('Usuários cadastrados com sucesso');
  }

  return response.end('Url not allowed')
});

server.listen(3333)
