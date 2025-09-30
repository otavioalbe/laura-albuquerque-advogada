# 👩‍⚖️ Laura Albuquerque - Advogada

Site institucional da Dra. Laura Albuquerque, advogada especialista em Direito de Família e Sucessões.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.0** - Build tool e dev server ultrarrápido
- **Tailwind CSS 4.1.11** - Framework CSS utility-first
- **React Router DOM 7.9.1** - Roteamento para aplicações React

### Bibliotecas Adicionais

- **Swiper 11.2.10** - Carrossel/slider responsivo
- **React Responsive 10.0.1** - Hooks para media queries responsivas
- **Hamburger React 2.5.2** - Componente de menu hambúrguer animado

### Ferramentas de Desenvolvimento

- **ESLint 9.33.0** - Linter para JavaScript/TypeScript
- **Prettier 3.6.2** - Formatador de código
- **Husky 9.1.7** - Git hooks para automação
- **Lint-staged 16.1.5** - Executa linters em arquivos staged
- **TypeScript ESLint 8.39.0** - Regras ESLint específicas para TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Container.tsx    # Container responsivo
│   ├── DifferenceCard.tsx
│   ├── FieldCard.tsx
│   ├── Hamburguer.tsx
│   └── WhatsAppButton.tsx
├── sections/            # Seções da página
│   ├── About.tsx        # Seção sobre a advogada
│   ├── Banner.tsx       # Banner principal
│   ├── Contact.tsx      # Formulário de contato
│   ├── Differences.tsx  # Diferenciais do serviço
│   ├── Feedbacks.tsx    # Depoimentos de clientes
│   ├── Fields.tsx       # Áreas de atuação
│   ├── Footer.tsx       # Rodapé
│   ├── Header.tsx       # Cabeçalho e navegação
│   └── VideosSection.tsx # Seção de vídeos
├── constants/           # Constantes e dados estáticos
│   ├── useAboutConstants.ts
│   ├── useDifferencesConstants.ts
│   ├── useFieldsConstants.ts
│   └── useVideosConstants.ts
├── hooks/               # Hooks customizados
│   ├── useBreakpoints.ts
│   └── useGoogleAnalytics.ts
├── types/               # Definições de tipos TypeScript
│   ├── CardType.ts
│   ├── swiper.d.ts
│   └── VideoType.ts
├── App.tsx              # Componente principal
└── main.tsx             # Ponto de entrada da aplicação
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Executa ESLint com correção automática
npm run format       # Formata código com Prettier

# Git Hooks
npm run prepare      # Configura Husky
```

## 🎨 Padrões de Código

### ESLint

O projeto utiliza uma configuração robusta do ESLint com:

- Configuração base do JavaScript/TypeScript
- Regras específicas para React e React Hooks
- Integração com Prettier para evitar conflitos de formatação
- Suporte a JSX e acessibilidade

### Prettier

Configuração de formatação:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### TypeScript

- **Target**: ES2022
- **Modo strict** habilitado
- **JSX**: react-jsx (novo transform do React 17+)
- Verificação rigorosa de tipos não utilizados
- Configuração otimizada para bundlers modernos

## 📝 Padrão de Commits

O projeto utiliza **Husky** e **lint-staged** para garantir qualidade do código:

### Pre-commit Hooks

Antes de cada commit, automaticamente:

1. **ESLint** verifica e corrige problemas de código
2. **Prettier** formata o código
3. Apenas arquivos modificados são processados (lint-staged)

### Arquivos Processados

- **JavaScript/TypeScript** (`.js`, `.jsx`, `.ts`, `.tsx`): ESLint + Prettier
- **Outros arquivos** (`.css`, `.scss`, `.md`, `.json`, `.html`, `.yml`, `.yaml`): Prettier

### Recomendação de Commits

Embora não seja obrigatório, recomenda-se seguir o padrão **Conventional Commits**:

```bash
feat: adiciona nova seção de depoimentos
fix: corrige responsividade do menu mobile
docs: atualiza README com instruções de deploy
style: ajusta espaçamento dos cards
refactor: reorganiza estrutura de componentes
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd laura-albuquerque-advogada

# Instale as dependências
npm install

# Configure os git hooks
npm run prepare
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Build de Produção

```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel** com:

- Redirecionamento SPA (Single Page Application)
- Cache otimizado para assets estáticos
- Headers de segurança configurados

### Configuração Vercel (`vercel.json`)

- Rewrite de todas as rotas para `index.html` (SPA)
- Cache de 1 ano para assets estáticos
- Cache dinâmico para páginas

## 🎯 Funcionalidades

### Navegação

- **SPA** com React Router
- Scroll suave para seções específicas
- Menu responsivo com hambúrguer no mobile

### Seções

- **Banner**: Apresentação principal
- **Sobre**: Informações da advogada
- **Vídeos**: Conteúdo audiovisual
- **Diferenciais**: Pontos fortes do serviço
- **Áreas de Atuação**: Especialidades jurídicas
- **Contato**: Formulário e informações
- **Depoimentos**: Feedback de clientes

### Responsividade

- Design mobile-first
- Breakpoints customizados com hook `useBreakpoints`
- Componentes adaptativos (Swiper para mobile, grid para desktop)

### Performance

- Lazy loading de imagens
- Otimização de bundle com Vite
- Componentes otimizados com React 19

## 📄 Licença

Este projeto é privado e pertence à Dra. Laura Albuquerque.

---

**Desenvolvido com ❤️ para Dra. Laura Albuquerque - minha irmã**
