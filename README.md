# Livraria - Laboratório FullStack

## Sobre o Projeto

Este é um projeto full-stack desenvolvido como laboratório de programação, com foco em aprender e aplicar conceitos modernos de desenvolvimento web. A aplicação consiste em um frontend ReactJS e um backend **C# .NET** com banco de dados **PostgreSQL**, criando um sistema completo de gerenciamento de livraria.

## Objetivo

- **Laboratório de aprendizado**: Espaço para experimentar novas tecnologias e práticas
- **Desenvolvimento FullStack**: Prática completa do desenvolvimento web
- **Base para expansão**: Estrutura preparada para adicionar funcionalidades futuras

## Tecnologias Utilizadas

### **Frontend**
- **ReactJS** - Biblioteca para construção da interface
- **Vite** - Build tool e dev server
~~- **TypeScript** - Tipagem estática (se aplicável)~~
~~- **TailwindCSS** - Estilização (ou outra biblioteca CSS)~~
~~- **Axios** - Cliente HTTP para chamadas à API~~
~~- **React Router** - Gerenciamento de rotas~~

~~### **Backend**~~
~~- **.NET 8/9** - Framework para aplicações web~~
~~- **ASP.NET Core** - Construção de APIs RESTful~~
~~- **Entity Framework Core** - ORM para acesso a dados~~
~~- **PostgreSQL** - Banco de dados relacional~~
~~- **JWT Bearer** - Autenticação por tokens~~
~~- **AutoMapper** - Mapeamento entre objetos~~
~~- **Swagger/OpenAPI** - Documentação automática da API~~
~~- **Dapper** - Micro-ORM para queries complexas (opcional)~~

~~### **Banco de Dados (Atualizado)**~~
~~- **PostgreSQL 15+** - Banco de dados relacional robusto~~
~~- **pgAdmin** - Interface de administração~~
~~- **PostGIS** - Extensão para dados espaciais (se necessário)~~
~~- **EF Core Migrations** - Controle de versão do schema~~

### **Ferramentas de Desenvolvimento**
- **Git** - Controle de versão
~~- **Use Bruno** - Teste de APIs~~
- **ESLint & Prettier** - Padronização de código
~~- **Visual Studio 2022** - IDEs para desenvolvimento~~

## Funcionalidades

### Funcionalidades Atuais

#### **1. Autenticação e Autorização**
- [ ] Cadastro de usuários
- [ ] Login com email/senha
- [ ] Autenticação JWT
- [ ] Middleware de proteção de rotas
- [ ] Logout seguro

#### **2. Gerenciamento de Livros**
- [ ] CRUD completo de livros
  - Criar novo livro
  - Listar todos os livros
  - Buscar livro por ID
  - Atualizar informações do livro
  - Remover livro
- [ ] Busca e filtragem
  - Busca por título/autor
  - Filtros por categoria
  - Ordenação por preço/data
- [ ] Upload de capas de livros
- [ ] Sistema de ISBN

#### **3. Sistema de Categorias**
- [ ] Gerenciamento de categorias
- [ ] Relacionamento livro-categoria
- [ ] Navegação por categorias

#### **4. Sistema de Usuários**
- [ ] Perfil de usuário
- [ ] Histórico de atividades
- [ ] Lista de desejos (wishlist)
- [ ] Avaliações de livros

#### **5. Interface Responsiva**
- [ ] Design mobile-first
- [ ] Dashboard administrativo
- [ ] Catálogo de livros público
- [ ] Páginas de detalhes

### Funcionalidades Futuras (Roadmap)

#### **Fase 2 - Experiência do Usuário**
- [ ] **Sistema de Recomendação com IA**
  - Recomendações baseadas em histórico
  - "Clientes que compraram X também compraram Y"
  - Recomendações por similaridade de conteúdo
- [ ] **Sistema de Avaliações e Reviews**
  - Comentários e notas
  - Análises verificadas
- [ ] **Busca Inteligente**
  - Busca semântica
  - Correção automática de termos

#### **Fase 3 - Funcionalidades Avançadas**
- [ ] **Integração com APIs externas**
  - Google Books API
  - API de editoras
- [ ] **Sistema de Empréstimos** (se for biblioteca)
- [ ] **Relatórios e Analytics**
- [ ] **Exportação de dados**
- [ ] **API Documentation** (Swagger/OpenAPI)

#### **Fase 4 - Inteligência Artificial (Foco Futuro)**
- [ ] **Recomendação por Machine Learning**
  - Sistema de recomendação colaborativo
  - Filtragem baseada em conteúdo
  - Modelos de deep learning para sugestões
- [ ] **Chatbot para atendimento**
  - Assistente virtual para dúvidas
  - Recomendação conversacional
- [ ] **Análise de sentimentos em reviews**
- [ ] **Geração automática de resumos**

## Modelo da Arquitetura do Projeto 

```
livraria/
├── client/ # Aplicação React (frontend)
│ ├── src/
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── pages/ # Páginas da aplicação
│ │ ├── services/ # Comunicação com API
│ │ ├── hooks/ # Custom hooks
│ │ ├── context/ # Context API
│ │ └── utils/ # Funções auxiliares
│ └── public/
│
├── server/ # API .NET (backend)
│ ├── src/
│ │ ├── Livraria.API/ # Projeto principal da API
│ │ │ ├── Controllers/ # Controladores API
│ │ │ ├── Models/ # ViewModels/DTOs
│ │ │ ├── Services/ # Serviços de aplicação
│ │ │ ├── Middleware/ # Middlewares customizados
│ │ │ ├── Filters/ # Filtros de ação
│ │ │ └── Program.cs # Ponto de entrada
│ │ │
│ │ ├── Livraria.Core/ # Camada de domínio
│ │ │ ├── Entities/ # Entidades de domínio
│ │ │ ├── Interfaces/ # Interfaces de repositório
│ │ │ ├── Services/ # Serviços de domínio
│ │ │ └── Specifications/ # Padrão Specification
│ │ │
│ │ ├── Livraria.Infrastructure/ # Camada de infraestrutura
│ │ │ ├── Data/ # Contexto EF e configurações
│ │ │ ├── Repositories/ # Implementações de repositório
│ │ │ ├── Migrations/ # Migrações do banco
│ │ │ └── Identity/ # Configuração de autenticação
│ │ │
│ │ └── Livraria.Tests/ # Projeto de testes
│ │
│ ├── Livraria.sln # Solução .NET
│ └── docker-compose.yml # Docker para PostgreSQL
│
└── shared/ # Código compartilhado (opcional)
```


## Como Executar o Projeto (Atualizado)

### **Pré-requisitos**
- Node.js (v22.21.0 ou superior) - para o frontend
- **.NET 8+ SDK** - para o backend
- **PostgreSQL 15+** ou Docker
- **Visual Studio 2022** ou **VS Code** com extensão C#

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/livraria.git
cd livraria
cd server
# Restaurar pacotes NuGet
dotnet restore

# Configure a connection string no appsettings.json
# Ou use variáveis de ambiente:
# setx ConnectionStrings__DefaultConnection "Host=localhost;Database=livraria;Username=postgres;Password=sua_senha"

# Aplicar migrations do banco de dados
dotnet ef database update --project Livraria.Infrastructure --startup-project Livraria.API

# Executar a API
dotnet run --project Livraria.API
```

2. **Configure o Backend (.NET)**
```bash
cd server
# Restaurar pacotes NuGet
dotnet restore

# Configure a connection string no appsettings.json
# Ou use variáveis de ambiente:
# setx ConnectionStrings__DefaultConnection "Host=localhost;Database=livraria;Username=postgres;Password=sua_senha"

# Aplicar migrations do banco de dados
dotnet ef database update --project Livraria.Infrastructure --startup-project Livraria.API

# Executar a API
dotnet run --project Livraria.API
```

3. **Configuração do PostgreSQL com Docker (alternativa)**
```bash
# Na pasta server/
docker-compose up -d

# Isso criará um container PostgreSQL pronto para uso
```

4. **Configure o Frontend (React)**
```bash
cd ../client
npm install
npm run dev
```

5. **Acesse a aplicação**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000 ou https://localhost:5001
- Swagger UI: http://localhost:5000/swagger
- pgAdmin (se usando Docker): http://localhost:8080