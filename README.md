# 🛒 E-commerce Node API

API desenvolvida em **Node.js com TypeScript** para fins acadêmicos, com foco na prática de desenvolvimento de software, Programação Orientada a Objetos, criação de APIs e aplicação de boas práticas de arquitetura.

O objetivo deste projeto é simular a base de uma aplicação de e-commerce, explorando conceitos importantes para construção de sistemas web modernos.

---

## ✨ Funcionalidades

* Estrutura inicial de uma API para e-commerce
* Organização do projeto com TypeScript
* Prática de Programação Orientada a Objetos
* Base para criação de recursos como produtos, clientes, pedidos e pagamentos
* Preparação para integração com banco de dados
* Preparação para implementação de testes automatizados

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* TypeScript
* Sucrase
* npm

---

## 📂 Estrutura do Projeto

```text
.
├── requirements/
├── src/
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Como executar o projeto

### Clone o repositório

```bash
git clone https://github.com/ONestoDev/ecommerce-typescript.git
```

### Acesse a pasta

```bash
cd ecommerce-typescript
```

### Instale as dependências

```bash
npm install
```

### Execute em modo de desenvolvimento

```bash
npx sucrase-node src/index.ts
```

### Compile o TypeScript

```bash
npx tsc
```

### Execute a versão compilada

```bash
node dist/index.js
```

---

## 📌 Scripts recomendados

Caso queira facilitar a execução do projeto, adicione os scripts abaixo no `package.json`:

```json
"scripts": {
  "dev": "sucrase-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "watch": "tsc -w"
}
```

Depois disso, será possível executar:

```bash
npm run dev
```

---

## 📌 Objetivos de aprendizado

Este projeto foi desenvolvido para praticar:

* Desenvolvimento de APIs com Node.js
* Uso de TypeScript no back-end
* Programação Orientada a Objetos
* Organização de código
* Boas práticas de desenvolvimento
* Princípios de arquitetura de software
* Preparação para integração com banco de dados
* Preparação para testes automatizados

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram trabalhados conceitos como:

* Configuração de ambiente Node.js com TypeScript
* Execução de arquivos TypeScript com Sucrase
* Estruturação inicial de uma API
* Organização de responsabilidades
* Tipagem estática
* Preparação de um projeto para evolução incremental

---

## 📌 Roadmap

* [x] Configuração inicial do projeto
* [x] Configuração do TypeScript
* [x] Estrutura base da API
* [ ] Criar módulo de produtos
* [ ] Criar módulo de clientes
* [ ] Criar módulo de pedidos
* [ ] Criar módulo de pagamentos
* [ ] Integrar com banco de dados
* [ ] Implementar testes automatizados
* [ ] Documentar endpoints da API

---

## 👨‍💻 Autor

Desenvolvido por **ONestoDev**.

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento back-end com Node.js, TypeScript e arquitetura de software.

---

## 📄 Licença

Este projeto está licenciado sob a licença ISC.
