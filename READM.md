* STATEFUL

-  Aplicação que salva algo em memória para seu funcionamento durante a execução. Após execução novamente os dados são perdidos.

* STATELESS

- Guarda informações em banco de dados ou outros arquivos para salvar os dados durante execução. Após execução novamente os dados não são perdidos.


* Cabeçalho (Requisição/resposta) => Metadados (HEADERS)

- Ele especifica qual as principais caracteristicas dos dados retornados da busca.
 - O mais famoso é setHeader('Content-Type', 'application/json')

* Buffer

- É a forma de escrever dados ou ler dados de forma mais performática, guardando esses dados em hexadecimal.

* Middlewares

 - interceptador que acontece entre a requisição de solicitação e a resposta

* Query Parameters:

- https://localhost:3000/users?userId=1 => userId = 1
- URL Stateful (filtros, paginação, não-obrigatórios)

* Route Parameters:

- https://localhost:3000/user/1
- Identificação de recurso

* Request Body

- Envio de informações de um formulário
