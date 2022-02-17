<h1 align="center">
  <strong>Ernane.dev | API</strong>
</h1>

<p align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Autenticação">Autenticação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Métodos">Métodos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Respostas">Respostas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Usuários">Usuários</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Categorias">Categorias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Publicações">Publicações</a>&nbsp;&nbsp;&nbsp;
</p>

<br/>

<p align="center">
  <p align="center">
  <img alt="Banner API image" src="https://f.hubspotusercontent20.net/hubfs/7473178/Developers/API-og-image.png" width="100%">
</p>

## 🚀 Tecnologias

Esta API foi desenvolvida com as seguintes tecnologias:
- Typescript
- Dependências:
  - `bcryptjs`: ^2.4.3,
  - `cors`: ^2.8.5,
  - `express`: ^4.17.2,
  - `express-async-errors`: ^3.1.1,
  - `jsonwebtoken`: ^8.5.1,
  - `pg`: ^8.7.1,
  - `reflect-metadata`: ^0.1.13,
  - `typeorm`: ^0.2.41,
  - `uuid`: ^8.3.2

## 💻 Projeto

Esta API consiste em uma conexão entre o site `Ernane.dev` e seu `cms` para o gerenciamento de conteúdo publicado no Blog. A mesma, conta com associações entre autores e publicações bem como demarcação de postagens por categoria. Seu intuito é facilitar a administração do conteúdo no site e melhorar a implantação de um site estático com conteúdos relativamente dinâmicos.

## 🔒 Autenticação

A API utiliza [JWT](https://jwt.io/) como forma de autenticação/autorização.
Dessa forma se torna necessária a criação de conta em nosso banco bem como autenticação em rotas privadas de aplicação.


## 📑 Métodos
Requisições para a API seguem os padrões:
|  Método  | Descrição |
|----------|-----------|
| `GET`    | Retorna informações de um ou mais registros. |
| `POST`   | Utilizado para criar um novo registro. |
| `PUT`    | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## ↩️ Respostas

| Código | Descrição |
|--------|-----------|
| `200`  | Requisição executada com sucesso (success).|
| `400`  | Erros de validação ou os campos informados não existem no sistema.|
| `401`  | Dados de acesso inválidos.|
| `404`  | Registro pesquisado não encontrado (Not found).|

## 🔗 Rotas

  ### 🔒 Autorização

  |    Path    |  Método  | Ação |
  |------------|----------|------|
  | /login     | `post`   | Autentica o usuário, se existente no banco, e retorna um token de acesso válido por tempo limitado.|

  ### 👥 Usuários

  |    Path    |  Método  | Autenticação | Ação
  |------------|----------|--------------|-----|
  | /users     | `post`   |     ❌      | Cria um novo usuário no banco de dados |
  | /users     | `get`    |     ✅      | Retorna um `JSON` com todos os usuários presentes no banco de dados |
  | /users/:id | `delete` |     ✅      | Deleta um usuário a partir de um `id` passado |
  | /users/:id | `put`    |     ✅      | Atualiza um usuário presente no banco de dados a partir de um `id` passado |
  | /users/:id | `get`    |     ❌      | Busca um usuário no banco de dados a partir de um `id` passado |
    
  ### 🔠 Categorias

  |    Path    |  Método  | Autenticação | Ação
  |------------|----------|--------------|-----|
  | /categories     | `post`   |     ✅      | Cria uma nova categoria no banco de dados |
  | /categories     | `get`    |     ❌      | Retorna um `JSON` com todas as categorias presentes no banco de dados |
  | /categories/:id | `delete` |     ✅      | Deleta uma categoria a partir de um `id` passado |
  | /categories/:id | `put`    |     ✅      | Atualiza uma categoria presente no banco de dados a partir de um `id` passado |
  | /categories/:id | `get`    |     ❌      | Busca uma categoria no banco de dados a partir de um `id` passado |

  ### 📮 Publicações

  |    Path    |  Método  | Autenticação | Ação
  |------------|----------|--------------|-----|
  | /posts     | `post`   |     ✅      | Cria uma nova publicação no banco de dados |
  | /posts     | `get`    |     ❌      | Retorna um `JSON` com todas as publicaçõess presentes no banco de dados |
  | /posts/:id | `delete` |     ✅      | Deleta uma publicação a partir de um `id` passado |
  | /posts/:id | `put`    |     ✅      | Atualiza uma publicação presente no banco de dados a partir de um `id` passado |
  | /posts/:id | `get`    |     ❌      | Busca uma publicação no banco de dados a partir de um `id` passado |

<hr/>

<p align="center">
  Desenvolvido com ❤ por <a target="_blank" href="https://ernanej.github.io/my-linktree/">Ernane Ferreira</a>. 👋🏻<br/>
</p>
