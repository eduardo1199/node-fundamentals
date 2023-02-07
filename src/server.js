import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';

//Cabeçalho (Requisição/resposta) => Metadados 


const server = http.createServer(async (request, response) => {
  const { method, url } = request;
       
  await json(request, response);

  const route = routes.find((route) => route.method === method && route.path === url);

  if(route) {
    return route.handler(request, response);
  }

  return response.end('Url not allowed')
});

server.listen(3333)
