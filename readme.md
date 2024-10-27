AluraGeek - Gerenciamento de Produtos
Este é um projeto de front-end desenvolvido para a loja fictícia AluraGeek. A aplicação permite gerenciar produtos, simulando operações CRUD (Criar, Ler, Atualizar, Excluir) através de uma API fake utilizando o json-server. O projeto oferece uma interface interativa para adicionar, editar, visualizar e excluir produtos.

Índice
Tecnologias Utilizadas
Funcionalidades
Instalação e Configuração
Estrutura de Pastas
Detalhes de Implementação
Como Contribuir
Licença
Tecnologias Utilizadas
HTML5 e CSS3: Estrutura e estilização da interface.
JavaScript (ES6+): Manipulação do DOM e funcionalidades de CRUD.
json-server: Simulação de uma API RESTful.
Fetch API e Async/Await: Para realizar requisições assíncronas.
Funcionalidades
Adicionar Produto: Permite adicionar novos produtos com nome, preço e imagem.
Listar Produtos: Exibe todos os produtos cadastrados em cards dinâmicos.
Editar Produto: Abre um modal com as informações do produto para que ele possa ser editado.
Excluir Produto: Remove o produto selecionado da lista.
Instalação e Configuração
Pré-requisitos
Node.js (versão 12 ou superior)
Passo a Passo
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/alurageek.git
cd alurageek
Instale o json-server:

bash
Copiar código
npm install -g json-server
Inicie o json-server:

bash
Copiar código
json-server --watch db.json --port 3000
O json-server cria uma API RESTful fake que permite manipular os produtos. Ele irá rodar em http://localhost:3000.

Inicie o projeto: Abra o arquivo index.html diretamente no navegador ou utilize uma extensão como o Live Server do VS Code para uma melhor experiência.

Estrutura de Pastas
graphql
Copiar código
alurageek/
├── assets/                   # Imagens e logotipos
├── css/
│   └── style.css             # Estilos da aplicação
├── js/
│   ├── api.js                # Arquivo que centraliza as requisições para a API fake
│   ├── productList.js        # Código para manipular a listagem dos produtos
│   └── addProduct.js         # Código para adicionar novos produtos
├── db.json                   # Banco de dados JSON para o json-server
├── index.html                # Página principal (listagem de produtos)
├── addProduct.html           # Página para adicionar produtos
└── README.md                 # Documentação do projeto
Detalhes de Implementação
CRUD com JSON Server
GET: A função fetchProducts() em api.js realiza uma requisição GET para buscar a lista de produtos.
POST: A função addProduct() adiciona um novo produto enviando uma requisição POST ao json-server.
PUT: A função updateProduct() permite atualizar os dados de um produto existente com uma requisição PUT.
DELETE: A função deleteProduct() realiza a exclusão de produtos ao enviar uma requisição DELETE.
Modal de Edição
Ao clicar no botão "Editar", o usuário pode atualizar o nome, preço e imagem do produto selecionado. O modal é exibido com um formulário pré-preenchido e atualizado após a submissão do formulário.

Armazenamento de Imagens
As imagens dos produtos são armazenadas como strings em base64 para simplificar o armazenamento e visualização sem backend real.

Como Contribuir
Faça um fork do projeto
Crie uma nova branch com sua feature:
bash
Copiar código
git checkout -b minha-feature
Commit suas mudanças:
bash
Copiar código
git commit -m "Minha nova feature"
Envie para a branch principal:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request no repositório original.

