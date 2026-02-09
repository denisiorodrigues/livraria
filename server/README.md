# Livraria API

Serviço web API do projeto de livraria utilizando .NET 8 com arquitetura monilítica.

## Arquitetura
### Proposta de arquitetura
```textmate
MinhaSolucao/
├── Livraria.sln
├── MinhaApi/
│   ├── MinhaApi.csproj
│   ├── Program.cs
│   └── appsettings.json
└── Infra.Data/
│   ├── Infra.Data.csproj
│   ├── Contextos/
│   ├── Entidades/
│   ├── Configuracoes/
│   └── Migracoes/
└── README.md
```
### Pontos Importantes:

1. Configuração do DbContext: A string de conexão fica no projeto API
2. Migrations: São geradas no projeto Livraria.Infra, mas executadas através do projeto API
3. Dependências: O projeto API referencia o projeto Livraria.Infra
4. Separação de Responsabilidades: A API não conhece detalhes de implementação do banco

Esta estrutura permite uma boa separação de responsabilidades e facilita a manutenção e testes da aplicação.

## Bibliotecas
 - Pomelo.EntityFrameworkCore.MySql
 - Microsoft.EntityFrameworkCore.Design
 - Microsoft.EntityFrameworkCore.Tools

## Banco de dados
### Migrations

Usando CLI para gerar a migração
```bash
dotnet ef migrations add InitialCreate --project Livraria.Infra --startup-project Livraria.API
```

Atualizando na base de dados
```bash
dotnet ef database update --project Livraria.Infra --startup-project Livraria.API
```
