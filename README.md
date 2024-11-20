

> Uma experiência inovadora para conectar clientes e barbeiros de forma prática e eficiente.  

---

## **Índice**  

1. [Descrição](#descrição)  
2. [Funcionalidades](#funcionalidades)  
   - [Visão Geral](#visão-geral)  
   - [Clientes](#clientes)  
   - [Barbeiros](#barbeiros)  
3. [Arquitetura](#arquitetura)  
4. [Fluxo da Aplicação](#fluxo-da-aplicação)  
5. [Instalação e Execução](#instalação-e-execução)  
6. [Testes](#testes)  

---

## **Descrição**  

Este projeto é uma **plataforma web responsiva** desenvolvida com **Next.js** e **TailwindCSS**, que conecta clientes a barbeiros de forma intuitiva. Ele oferece agendamentos simplificados, gerenciamento de serviços e perfis personalizados para ambos os usuários.  

---

## **Funcionalidades**  

### **Visão Geral**  

- Registro/login para clientes e barbeiros.  
- Busca avançada com filtros (localização, nome e preço).  
- Agendamentos de serviços com horários gerenciáveis.  
- Interfaces projetadas para **mobile-first**.  

### **Clientes**  
- Criam contas para buscar barbeiros por filtros personalizáveis.  
- Agendam, cancelam ou reagem serviços facilmente.  

### **Barbeiros**  
- Gerenciam seus horários, preços e agendamentos.  
- Acompanham estatísticas de desempenho.  

---

## **Arquitetura**  

A aplicação foi desenvolvida com foco em modularidade e escalabilidade:  

- **Next.js**: Framework para renderização de páginas e roteamento dinâmico.  
- **TailwindCSS**: Estilização eficiente com classes utilitárias.  
- **Axios**: Comunicação robusta com o backend.  
- **Context API**: Gerenciamento centralizado de estados.  

---

## **Fluxo da Aplicação**  

### **1. Página Inicial**  
A página inicial apresenta informações gerais e avaliações de barbeiros.  

![Página Inicial](https://github.com/user-attachments/assets/1f49f6e7-be5a-4d37-af03-0e51b3789b74)  

### **2. Registro e Login**  
Interface dedicada para clientes e barbeiros criarem suas contas ou acessarem o sistema.  

![Registro](https://github.com/user-attachments/assets/cd69c89f-e844-47d1-bd42-2ab548f87a1e)  
![Login](https://github.com/user-attachments/assets/f5e9d462-052a-4ef7-ae84-64871fe0f3d7)  

### **3. Perfis Personalizados**  
Usuários possuem funcionalidades específicas:  
- **Clientes**: Busca e agendamento.  
- **Barbeiros**: Gerenciamento de serviços e configurações.  

![Perfil Cliente](https://github.com/user-attachments/assets/121633b0-5bde-4abe-be94-f2f88c6531db)  
![Perfil Barbeiro](https://github.com/user-attachments/assets/1e34dd18-080d-4b37-83dc-0e44726cf426)  

### **4. Sistema de Busca**  
Clientes encontram barbeiros por meio de filtros avançados.  

![Busca de Barbeiros](https://github.com/user-attachments/assets/8aa43f65-da00-4e16-a185-ff0dbf928a00)  

### **5. Agendamentos**  
Interface prática para marcar serviços com barbeiros.  

![Agendamento](https://github.com/user-attachments/assets/f17774c0-e410-432d-94dc-e55768e80500)  

---

## **Instalação e Execução**  

Siga as etapas abaixo para rodar o projeto localmente:  

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
Automatize fluxos críticos, como login e agendamentos, com **Cypress** ou **Playwright**.  

### **Testes de Integração**  
Valide a comunicação com a API usando **Postman** ou **Insomnia**.  

---

Desenvolvido com 💡 e ❤️ para facilitar conexões no universo das barbearias!  

---  

### Ajustes Realizados  
- Estrutura do texto mais clara.  
- Destaque de seções principais.  
- Menos repetições e linguagem objetiva.  

Se quiser mais melhorias, é só pedir! 😊
