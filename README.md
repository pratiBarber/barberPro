
# **Barber Search** - Frontend

## **Descrição**

A **Barber Search** é uma interface desenvolvida para conectar clientes e barbeiros, oferecendo recursos modernos como agendamento de serviços, gerenciamento de perfis e registro/login. Construída com **Next.js** e **TailwindCSS**, a plataforma entrega uma experiência responsiva, intuitiva e eficiente para ambos os tipos de usuários.

---

## **Índice**
- [Funcionalidades](#funcionalidades)
    - [Visão Geral](#visão-geral)
    - [Clientes](#clientes)
    - [Barbeiros](#barbeiros)
- [Arquitetura](#arquitetura)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Instalação e Execução](#instalação-e-execução)
- [Testes](#testes)

---

## **Funcionalidades**

### **Visão Geral**
- Registro e login para clientes e barbeiros.
- Sistema de busca avançada com filtros por localização, nome e preço.
- Agendamento de serviços com gerenciamento de horários.
- Barbeiros podem configurar preços e definir horários de trabalho.
- Interface adaptada para dispositivos móveis e desktops.

### **Clientes**
- Registro/login com validação de credenciais.
- Agendamento, cancelamento e reagendamento de serviços.
- Busca personalizada de barbeiros com filtros ajustáveis.

### **Barbeiros**
- Registro/login com acesso a ferramentas exclusivas.
- Configuração de preços e horários de trabalho.
- Gerenciamento de agendamentos com opções de aceitar, recusar ou remarcar serviços.
- Monitoramento de estatísticas de desempenho.

---

## **Arquitetura**

A arquitetura do projeto foi projetada para garantir modularidade e escalabilidade:
- **Next.js**: Framework para renderização SSR e roteamento dinâmico.
- **TailwindCSS**: Framework de estilização eficiente com classes utilitárias.
- **Context API**: Gerenciamento de estados globais, como autenticação.
- **Axios**: Ferramenta robusta para requisições HTTP.
- **Mobile First Design**: Focado em responsividade para dispositivos móveis.

---

## **Fluxo da Aplicação**

### **1. Página Inicial**
- Apresenta informações gerais e avaliações de barbeiros para atrair usuários.

#### **Home**

![image](https://github.com/user-attachments/assets/b01d69dc-ad38-4f3d-b9db-d23230755004)


#### **Avaliações**

![image](https://github.com/user-attachments/assets/7ccece9d-29fc-474e-b851-3999acdd800c)


---

### **2. Registro/Login**
- Permite que clientes e barbeiros criem contas ou acessem suas áreas exclusivas.

#### **Tela de Registro**

![image](https://github.com/user-attachments/assets/cd69c89f-e844-47d1-bd42-2ab548f87a1e)

#### **Tela de Login**


![image](https://github.com/user-attachments/assets/1ab906b1-8164-48cb-a23c-ee61e7d46a5d)


---

### **3. Perfil Personalizado**
- **Clientes**: Procuram barbeiros e gerenciam seus agendamentos.
- **Barbeiros**: Configuram horários, preços e gerenciam solicitações.

#### **Home (pós login/cadastro)**


![image](https://github.com/user-attachments/assets/4bbe1571-292d-4e88-8bf4-5e988319c963)


#### **Perfil de um barbeiro (Barbeiro)**


![image](https://github.com/user-attachments/assets/b9085fc4-b6fa-4729-8bf8-83766e82fd25)


#### **Perfil de um barbeiro (Cliente)**


![image](https://github.com/user-attachments/assets/bf415f84-4e72-45cd-8444-6a8d2e94ec83)


#### **Perfil de um cliente**


![image](https://github.com/user-attachments/assets/a8c923f9-8f24-438c-8d80-84a4a547b37a)


---

### **4. Sistema de Busca**
- Filtros avançados para refinar a pesquisa de barbeiros por localização, nome e preço.

![image](https://github.com/user-attachments/assets/86932bc2-77c3-4438-96fd-6e55843bc51f)


---

### **5. Agendamento**
- Clientes escolhem horários disponíveis e confirmam serviços com facilidade.


![image](https://github.com/user-attachments/assets/6b1d18cf-921c-4200-a16f-4c1027666ce5)


---

### **6. Gerenciamento de Serviços**
- Barbeiros organizam agendamentos de forma interativa e prática.

![image](https://github.com/user-attachments/assets/304bd519-3dad-4a35-8ae3-c659011ea40e)


---

## **Instalação e Execução**

### **1. Clonar o Repositório**
```bash
git clone https://github.com/pratiBarber/barberPro.git
```

### **2. Instalar Dependências**
```bash
cd barberPro
npm install
```

### **3. Configurar Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_JWT_SECRET=seu-segredo-jwt
```

### **4. Executar o Projeto**
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## **Testes**

### **Testes de Interface**
- Utilize **Cypress** ou **Playwright** para validar os principais fluxos, como login e agendamentos.

### **Testes de Integração**
- Teste as integrações com a API usando ferramentas como **Postman** ou **Insomnia**.

---
