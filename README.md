<h1 align="center">
   <img src=".github/logo.png" alt="Logo do projeto" width="100%"/>
</h1>

<div align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Métodos">Métodos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Dados">Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Acesse">Acesse</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Use">Use</a>&nbsp;&nbsp;&nbsp;
</div>

<br>

## 🚀 Tecnologias

Esta aplicação foi desenvolvida com as seguintes tecnologias:

- JavaScript
- Typescript
- Postgress
- Typeorm

## 💻 Projeto

API desenvolvida como complemento extra ao desafio da tecnologia da semana - [React](https://reactjs.org/) - proposto na [comunidade ballerini](https://discord.gg/ballerini) (discord). A mesma serviu para armazenar e manipular os dados cadastrados no sistema.

### 📁 Métodos

|  Método |     Rota   |                  Ação                  | Auth    | 
|---------|------------|----------------------------------------|---------|
|  GET    | /dev       | Retorna os desenvolvedores cadastrados |   Não   |   
|  POST   | /dev       | Cadastra um novo deseolvedor           |   Não   |   
|  PUT    | /dev/`:id` | Atualiza os dados de um desenvolvedor  |   Não   |
|  DELETE | /dev/`:id` | Deleta o cadastro de um desenvolvedor  |   Não   |

### 🎲 Dados
```ts
type DevRequest = { 
  name:string; 
  description:string; 
  avatar:string; 
  office:string; 
  nick_github:string; 
  linkedin:string; 
  website:string; 
};
```

## 💻 Acesse
<a target="_blank" href="https://api-balle-dev.herokuapp.com/">Clique aqui</a> para acessar a aplicação.

## 💡 Use

- Clone este repositorio:

```bash
$ git clone https://github.com/ErnaneJ/api-balle-devs.git
```

- Instale todas as dependências:

```bash
$ npm i
```

- Configure as conexões (use [./.env.example](end.example))

- Inicie a aplicação em modo de desenvolvimento:

```bash
$ npm run dev
```

#### Se voce desejar implementar ou melhorar alguma feature fique avontade para enviar uma solicitacao de pull. Irei adorar receber!

---

<div align="center">
  Desenvolvido com ❤ por <a target="_blank" href="https://www.ernane.dev/">Ernane Ferreira</a>. 👋🏻
</div>
