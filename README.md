# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **TanStack Query** - Gerenciamento de estado e cache de dados

### Styling
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones
- **Class Variance Authority** - Gerenciamento de variantes de componentes

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **TypeScript** - Compilador e verificador de tipos

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes base (Button, etc.)
├── pages/
│   ├── Create-room.tsx  # Página de criação de salas
│   └── Room.tsx         # Página de detalhes da sala
├── lib/             # Utilitários e configurações
├── App.tsx          # Componente principal
└── main.tsx         # Ponto de entrada
```

## 🛠️ Configuração e Setup

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🔧 Configurações

### TypeScript
- Configurado com strict mode
- Path mapping configurado (`@/*` aponta para `./src/*`)

### Vite
- Plugin React habilitado
- Tailwind CSS integrado
- Alias de path configurado

### Biome
- Linter e formatter configurado
- Regras de código padronizadas

## 📱 Funcionalidades

- **Criação de Salas**: Interface para criar e gerenciar salas
- **Navegação**: Sistema de roteamento entre páginas
- **Gerenciamento de Estado**: Cache e sincronização de dados com TanStack Query
- **Componentes Reutilizáveis**: Biblioteca de componentes base com Radix UI

## 🌐 API

O projeto consome uma API local rodando na porta `3333`:
- `GET /rooms` - Lista todas as salas disponíveis

## 📝 Padrões de Projeto

- **Componentes Funcionais**: Uso de hooks do React
- **TypeScript**: Tipagem forte em toda a aplicação
- **Atomic Design**: Organização de componentes em UI/UX
- **Clean Code**: Código limpo e bem estruturado
- **Separation of Concerns**: Separação clara de responsabilidades

---

Desenvolvido com 💜 durante o NLW da Rocketseat 