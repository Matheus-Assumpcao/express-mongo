# API de Gerenciamento de Livros 📚

Este é um projeto de API REST desenvolvida com **Node.js** e **Express**. A API permite o gerenciamento de livros e autores, possibilitando operações **CRUD** (Create, Read, Update, Delete). 

O banco de dados utilizado é o **MongoDB** hospedado no **MongoDB Atlas**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (com mongoose)
- **JavaScript ES6+**

---

## 🔧 Funcionalidades

### 📚 Livros
- **GET /livros** - Lista todos os livros.
- **GET /livros/:id** - Busca um livro por ID.
- **POST /livros** - Cadastra um novo livro.
- **PUT /livros/:id** - Atualiza um livro existente.
- **DELETE /livros/:id** - Deleta um livro pelo ID.
- **GET /livros/busca?editora=** - Filtra livros por editora.

### 👤 Autores
- **GET /autores** - Lista todos os autores.
- **GET /autores/:id** - Busca um autor por ID.
- **POST /autores** - Cadastra um novo autor.
- **PUT /autores/:id** - Atualiza um autor existente.
- **DELETE /autores/:id** - Deleta um autor pelo ID.

---

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```bash
express-mongo/
├── src/
│   ├── config/             # Configuração do banco de dados
│   │   └── dbConnect.js
│   ├── controllers/        # Lógica dos controladores
│   │   ├── autorController.js
│   │   └── livroController.js
│   ├── models/             # Modelos do banco de dados (Mongoose)
│   │   ├── Autor.js
│   │   └── Livro.js
│   ├── routes/             # Rotas da aplicação
│   │   ├── autoresRoutes.js
│   │   ├── index.js
│   │   └── livrosRoutes.js
│   ├── app.js              # Configuração principal do Express
│   └── server.js           # Inicialização do servidor
│
├── .env                    # Variáveis de ambiente
├── .gitignore              # Arquivos ignorados no Git
├── package.json            # Dependências e scripts
├── package-lock.json       # Versões exatas das dependências
└── README.md               # Documentação do projeto
---

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas na sua máquina:

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou localmente configurado
- **NPM** ou **Yarn**

---

## 🚀 Instalação e Execução

### 1. Clone o Repositório
```
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto

2. Instale as dependências
npm install
# ou
yarn install

3. Configure o Banco de Dados
Crie um banco de dados no MongoDB Atlas.
Atualize a string de conexão no arquivo /config/dbConnect.js:
javascript

mongoose.connect("mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority");

4. Execute o Servidor
npm start
# ou
yarn start

5. Teste a API
A API será iniciada em:
http://localhost:3000

🔍 Exemplos de Endpoints
1. Listar todos os livros
GET /livros

json

[
  {
    "_id": "675899bd08761d60c94804ca",
    "titulo": "O Senhor dos Anéis",
    "editora": "Classicos",
    "preco": 150,
    "paginas": 350
  }
]

2. Cadastrar um livro
POST /livros

json

{
  "titulo": "1984",
  "editora": "Distopia",
  "preco": 100,
  "paginas": 300,
  "autor": "ID do autor existente"
}

3. Filtrar livros por editora
GET /livros/busca?editora=Classicos

🧪 Testando a API
Você pode testar os endpoints usando ferramentas como:

Postman
Insomnia
🌐 Publicação
Caso deseje publicar a API, você pode utilizar serviços como:

Heroku
Render
AWS

🛠️ Comandos Disponíveis
Comando	Descrição
npm install	Instala as dependências do projeto
npm start	Inicia o servidor localmente
npm run dev	Inicia o servidor em modo de dev