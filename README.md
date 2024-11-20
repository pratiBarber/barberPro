# FRONTEND

## Descrição

Este projeto é a interface para uma plataforma que conecta clientes e barbeiros, permitindo agendamentos de serviços, registro e login, além de funcionalidades exclusivas para cada tipo de usuário (clientes e barbeiros). A aplicação foi desenvolvida utilizando **Next.js** e **TailwindCSS**, proporcionando uma experiência moderna, responsiva e interativa.

---

## Conteúdo
- [Funcionalidades](#funcionalidades)
    - [Visão Geral](#visão-geral)
    - [Clientes](#clientes)
    - [Barbeiros](#barbeiros)
- [Arquitetura](#arquitetura)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Instalação e Execução](#instalação-e-execução)
- [Testes](#testes)

---

## Funcionalidades

### Visão Geral
- **Registro e Login**: Usuários podem se registrar e realizar login como cliente ou barbeiro.
- **Login de Convidado**: Usuários podem acessar funcionalidades básicas da plataforma sem criar uma conta.
- **Sistema de Busca**: Pesquisa de barbeiros por localização, nome ou preço.
- **Agendamento**: Clientes podem agendar, desmarcar ou reagendar serviços com os barbeiros cadastrados.
- **Escolha de Preço**: Os barbeiros podem definir os preços dos serviços, permitindo maior flexibilidade.
- **Interface Responsiva**: Otimizada para dispositivos móveis e desktops.

### Clientes
- Registro e login com validação de credenciais.
- Agendamento de serviços com base na disponibilidade dos barbeiros.
- Opção de cancelar ou reagendar compromissos.
- Visualização de histórico de agendamentos.
- Sistema de busca para encontrar barbeiros adequados.

### Barbeiros
- Registro e login para acesso a funcionalidades exclusivas.
- Configuração de horários de trabalho e preços.
- Gerenciamento de agendamentos (aceitar, recusar ou remarcar).
- Visualização de estatísticas de serviços realizados.

---

## Arquitetura

A aplicação utiliza uma arquitetura modular, organizada para garantir manutenibilidade e escalabilidade:

- **Next.js**: Framework principal para renderização de páginas e roteamento.
- **TailwindCSS**: Estilização rápida e eficiente utilizando classes utilitárias.
- **Context API**: Gerenciamento de estado global (autenticação, dados do usuário).
- **Axios**: Comunicação com a API backend para persistência de dados.
- **Responsividade**: Desenvolvida com _Mobile First Design_, adaptando-se a diversos dispositivos.

---

## Fluxo da Aplicação

1. **Registro/Login**:
   - O usuário escolhe entre criar uma conta ou realizar login.
   - Login de convidado disponível para navegação rápida.

  -![image](https://github.com/user-attachments/assets/cd69c89f-e844-47d1-bd42-2ab548f87a1e)


2. **Interface Personalizada**:
   - Clientes: Visualizam barbeiros, agendamentos e histórico.
   - Barbeiros: Configuram preços, horários e gerenciam compromissos.

3. **Sistema de Busca**:
   - Os clientes utilizam filtros para encontrar barbeiros por localização, preço ou nome.

4. **Agendamento**:
   - Clientes selecionam um barbeiro, escolhem um horário disponível e confirmam o serviço.

5. **Gerenciamento de Serviços**:
   - Barbeiros visualizam pedidos de agendamento e podem gerenciá-los (aceitar, recusar ou remarcar).

---

## Instalação e Execução

### 1. Clonar o Repositório
Clone o repositório para sua máquina local:
```bash
git clone https://github.com/SeuRepositorio/barber-platform.git
```

### 2. Instalar Dependências
Acesse o diretório do projeto e instale as dependências:
```bash
cd barber-platform
npm install
```

### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com as seguintes configurações:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_JWT_SECRET=seu-segredo-jwt
```

### 4. Rodar a Aplicação
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse a aplicação no navegador em:
```
http://localhost:3000
```

---

## Testes

### Testes de Interface
- Utilize ferramentas como Cypress ou Playwright para garantir a usabilidade das telas.
- Verifique fluxos como registro, login e agendamentos.

### Testes de Funcionalidade
- Teste as chamadas de API com ferramentas como Postman para garantir a integração correta.

---

Desenvolvido com ❤️ e dedicação para conectar clientes e barbeiros de forma prática e eficiente.



















This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
