# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma API para gerenciamento de agentes.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão para vetores no PostgreSQL
- **Zod** - Validação de schemas
- **Biome** - Linter e formatter de código

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts
│   ├── seed.ts
│   ├── schema/
│   └── migrations/
├── http/
│   └── routes/
├── env.ts
└── server.ts
```

## 🛠️ Padrões de Projeto

- **Clean Architecture** - Separação clara entre camadas
- **Repository Pattern** - Abstração do acesso a dados
- **Dependency Injection** - Inversão de dependências
- **Environment Variables** - Configuração via variáveis de ambiente
- **Type Safety** - Validação de tipos com TypeScript e Zod

## ⚙️ Configuração

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### Setup

1. **Clone o repositório**
```bash
git clone <repository-url>
cd server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
npx drizzle-kit push
```

6. **Popule o banco (opcional)**
```bash
npm run db:seed
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm start` - Executa em modo produção
- `npm run db:seed` - Popula o banco de dados com dados iniciais

## 🔗 Endpoints

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista todas as salas disponíveis

## 🐳 Docker

O projeto inclui configuração Docker para PostgreSQL com pgvector:

```bash
docker-compose up -d
```

## 📊 Banco de Dados

- **PostgreSQL 17** com extensão **pgvector**
- Migrações gerenciadas pelo **Drizzle Kit**
- Schema em camelCase
- Conexão via connection string

## 🔧 Ferramentas de Desenvolvimento

- **Biome** - Linting e formatação de código
- **TypeScript** - Compilação e verificação de tipos
- **Drizzle Kit** - Gerenciamento de migrações

---

Desenvolvido durante o evento NLW da Rocketseat 🚀 