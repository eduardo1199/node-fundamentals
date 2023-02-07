import { Database } from './database/index.js'

import { randomUUID } from 'node:crypto';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const users = database.select('users')

      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/user'),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email
      }
    
      database.insert('users', user);

      return res.end('Usuários cadastrados com sucesso');
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email
      }
    
      database.insert('users', user);

      return res.end('Usuários cadastrados com sucesso');
    }
  }
]