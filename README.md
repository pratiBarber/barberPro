Aqui está a versão revisada e aprimorada do README, mantendo todo o conteúdo original, mas com melhorias na organização, clareza e fluidez do texto:

---

# **Barber Platform** - Frontend

## **Descrição**

A **Barber Platform** é uma interface desenvolvida para conectar clientes e barbeiros, oferecendo recursos modernos como agendamento de serviços, gerenciamento de perfis e registro/login. Construída com **Next.js** e **TailwindCSS**, a plataforma entrega uma experiência responsiva, intuitiva e eficiente para ambos os tipos de usuários.

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
![image](https://github.com/user-attachments/assets/1f49f6e7-be5a-4d37-af03-0e51b3789b74)

#### **Avaliações**
![image](https://github.com/user-attachments/assets/3786cc7f-3d39-4843-9855-b31f9183ec9c)

---

### **2. Registro/Login**
- Permite que clientes e barbeiros criem contas ou acessem suas áreas exclusivas.

#### **Tela de Registro**
![image](https://github.com/user-attachments/assets/cd69c89f-e844-47d1-bd42-2ab548f87a1e)

#### **Tela de Login**
![image](https://github.com/user-attachments/assets/f5e9d462-052a-4ef7-ae84-64871fe0f3d7)

---

### **3. Perfil Personalizado**
- **Clientes**: Procuram barbeiros e gerenciam seus agendamentos.
- **Barbeiros**: Configuram horários, preços e gerenciam solicitações.

#### **Home (pós login/cadastro)**
![image](https://github.com/user-attachments/assets/e171bd88-bb4e-4583-8d04-fdad053a7153)

#### **Perfil de um barbeiro (Barbeiro)**
![image](https://github.com/user-attachments/assets/1e34dd18-080d-4b37-83dc-0e44726cf426)

#### **Perfil de um barbeiro (Cliente)**
![image](https://github.com/user-attachments/assets/9c62b0bd-4325-4e6a-b405-6dcc3e0c0f21)

#### **Perfil de um cliente**
![image](https://github.com/user-attachments/assets/121633b0-5bde-4abe-be94-f2f88c6531db)

---

### **4. Sistema de Busca**
- Filtros avançados para refinar a pesquisa de barbeiros por localização, nome e preço.

![Sistema de busca](https://github.com/user-attachments/assets/8aa43f65-da00-4e16-a185-ff0dbf928a00)

---

### **5. Agendamento**
- Clientes escolhem horários disponíveis e confirmam serviços com facilidade.

![Agendamento](https://github.com/user-attachments/assets/f17774c0-e410-432d-94dc-e55768e80500)

---

### **6. Gerenciamento de Serviços**
- Barbeiros organizam agendamentos de forma interativa e prática.

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

**Desenvolvido com ❤️ para facilitar a conexão entre clientes e barbeiros!**  

---  

O que achou dessa versão? Se tiver mais sugestões ou algo específico para ajustar, é só avisar! 😊
