<div align="center">

# 🛒 E-commerce com Node.js e TypeScript

Projeto acadêmico de backend desenvolvido para praticar Programação Orientada a Objetos, modelagem de domínio, arquitetura de software, testes automatizados e persistência com PostgreSQL.

![TypeScript](https://img.shields.io/badge/TypeScript-Backend-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Banco_de_Dados-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Testes-6E9F18?style=for-the-badge\&logo=vitest\&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_desenvolvimento-yellow?style=for-the-badge)

</div>

---

## 📌 Sobre o projeto

Este projeto representa a base de um sistema de e-commerce desenvolvido com Node.js e TypeScript.

A proposta é aplicar conceitos de desenvolvimento de software por meio da construção progressiva de módulos como:

* produtos;
* categorias;
* clientes;
* endereços;
* pedidos;
* pagamentos.

O projeto possui finalidade acadêmica e busca exercitar não apenas a implementação das funcionalidades, mas também:

* separação de responsabilidades;
* modelagem orientada a objetos;
* regras de negócio;
* persistência;
* testes;
* organização arquitetural;
* evolução incremental.

> No estado atual, o projeto funciona principalmente como uma aplicação de domínio executada pelo terminal. Uma camada HTTP completa ainda não está confirmada.

---

## 🎯 Objetivos

Os principais objetivos do projeto são:

* praticar TypeScript no backend;
* desenvolver modelagem orientada a objetos;
* aplicar princípios de arquitetura;
* separar domínio e infraestrutura;
* criar entidades com regras próprias;
* implementar repositórios;
* utilizar PostgreSQL;
* trabalhar com ORM;
* escrever testes automatizados;
* preparar a aplicação para uma futura API HTTP.

---

## ✅ Funcionalidades implementadas

Até o momento, o projeto possui elementos relacionados a:

* configuração de ambiente Node.js;
* compilação TypeScript;
* aliases de importação;
* entidades de domínio;
* módulo de produtos;
* categorias;
* endereços;
* testes automatizados;
* dados fictícios para testes;
* integração inicial com Prisma;
* modelagem para PostgreSQL;
* scripts de desenvolvimento e build.

---

## 🧠 Domínio do sistema

### Produto

Representa um item comercializado pelo e-commerce.

Pode conter informações como:

* identificador;
* nome;
* descrição;
* valor;
* categorias;
* data de criação;
* data de atualização.

### Categoria

Representa uma classificação utilizada para agrupar produtos.

Exemplos:

* informática;
* automóveis;
* eletrônicos;
* acessórios.

### Endereço

Representa informações de localização que poderão ser utilizadas por clientes e entregas.

### Cliente

Módulo planejado para representar os consumidores cadastrados.

### Pedido

Módulo futuro responsável por reunir produtos, quantidades, valores e cliente.

### Pagamento

Módulo futuro responsável pelo registro da forma e da situação do pagamento.

---

## 🏗️ Arquitetura

O projeto segue uma organização inspirada em separação por camadas.

Uma estrutura conceitual esperada é:

```text
src/
├── main/
│   └── infra/
│       └── database/
│           └── orm/
│               └── prisma/
│
├── modules/
│   ├── produto/
│   ├── categoria/
│   └── endereco/
│
├── shared/
└── index.ts
```

A intenção é manter separadas responsabilidades como:

```text
Domínio
   ↓
Casos de uso
   ↓
Repositórios
   ↓
Infraestrutura
   ↓
Banco de dados
```

---

## 🧩 Separação de responsabilidades

### Domínio

Contém:

* entidades;
* objetos de valor;
* regras de negócio;
* contratos.

### Aplicação

Contém:

* casos de uso;
* coordenação das operações;
* validações relacionadas aos fluxos.

### Infraestrutura

Contém:

* implementação dos repositórios;
* Prisma;
* PostgreSQL;
* configurações externas.

### Entrada da aplicação

O arquivo `src/index.ts` é utilizado para executar e demonstrar os fluxos implementados.

---

## 🗃️ Banco de dados

O projeto utiliza PostgreSQL com Prisma ORM.

As entidades confirmadas no schema incluem:

* `Categoria`;
* `Produto`;
* `CategoriasProdutos`.

A tabela associativa representa o relacionamento entre produtos e categorias.

```mermaid
erDiagram
    PRODUTO ||--o{ CATEGORIAS_PRODUTOS : possui
    CATEGORIA ||--o{ CATEGORIAS_PRODUTOS : classifica

    PRODUTO {
        uuid id
        string nome
        string descricao
        int valor
        datetime data_criacao
        datetime data_atualizacao
    }

    CATEGORIA {
        uuid id
        string nome
        datetime data_criacao
        datetime data_atualizacao
    }

    CATEGORIAS_PRODUTOS {
        uuid produto_id
        uuid categoria_id
        datetime data_criacao
        datetime data_atualizacao
    }
```

---

## 🛠️ Tecnologias

| Tecnologia | Utilização                       |
| ---------- | -------------------------------- |
| TypeScript | Linguagem principal              |
| Node.js    | Ambiente de execução             |
| npm        | Gerenciamento de dependências    |
| Sucrase    | Execução durante desenvolvimento |
| PostgreSQL | Banco de dados                   |
| Prisma     | ORM e modelagem da persistência  |
| Vitest     | Testes automatizados             |
| Faker      | Geração de dados fictícios       |
| dotenv     | Variáveis de ambiente            |
| Git        | Controle de versão               |
| GitHub     | Hospedagem e documentação        |

---

## 📦 Dependências principais

### Produção

* `@prisma/client`;
* `@prisma/adapter-pg`;
* `pg`;
* `dotenv`.

### Desenvolvimento

* `typescript`;
* `sucrase`;
* `tsconfig-paths`;
* `prisma`;
* `vitest`;
* `@vitest/ui`;
* `@faker-js/faker`;
* `@types/node`.

---

## 🚀 Como executar

### Pré-requisitos

É necessário possuir:

* Node.js;
* npm;
* PostgreSQL;
* Git.

Verifique as versões:

```bash
node --version
npm --version
```

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

No Windows, caso o PowerShell bloqueie o comando:

```powershell
npm.cmd install
```

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz.

Exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ecommerce"
```

Não publique o arquivo `.env`.

Mantenha apenas um modelo:

```text
.env.example
```

---

## 🗃️ Configuração do Prisma

Gere o Prisma Client:

```bash
npx prisma generate
```

Crie ou aplique uma migração:

```bash
npx prisma migrate dev
```

Para abrir o Prisma Studio:

```bash
npx prisma studio
```

---

## ▶️ Desenvolvimento

Execute:

```bash
npm run dev
```

O script utiliza Sucrase e os aliases configurados no TypeScript.

---

## 🏗️ Build

Compile o projeto:

```bash
npm run build
```

Execute a versão compilada:

```bash
npm start
```

---

## 🧪 Testes

Execute os testes em modo interativo:

```bash
npm test
```

Execute uma única vez:

```bash
npm run test:run
```

Abra a interface do Vitest:

```bash
npm run test:ui
```

---

## 📜 Scripts disponíveis

```json
{
  "dev": "node -r tsconfig-paths/register -r sucrase/register src/index.ts",
  "dev:console": "node -r tsconfig-paths/register -r sucrase/register src/index.ts",
  "build": "tsc -p tsconfig.json",
  "start": "node dist/index.js",
  "test": "vitest",
  "test:run": "vitest run",
  "test:ui": "vitest --ui"
}
```

---

## 📁 Estrutura geral

```text
ecommerce-typescript/
├── requirements/
├── src/
│   ├── main/
│   │   └── infra/
│   │       └── database/
│   │           └── orm/
│   │               └── prisma/
│   │                   └── schema.prisma
│   ├── modules/
│   ├── shared/
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> A estrutura deve ser atualizada conforme novos módulos forem adicionados.

---

## ✅ Pontos fortes

O projeto demonstra:

* TypeScript em ambiente Node.js;
* Programação Orientada a Objetos;
* entidades de domínio;
* separação arquitetural;
* módulo de produtos;
* modelagem de categorias;
* testes automatizados;
* persistência com Prisma;
* integração com PostgreSQL;
* aliases de importação;
* scripts de desenvolvimento e produção;
* evolução incremental documentada em commits.

---

## ⚠️ Limitações atuais

O projeto ainda apresenta algumas limitações:

* não possui camada HTTP confirmada;
* não possui endpoints REST;
* não possui autenticação;
* clientes ainda não estão concluídos;
* pedidos ainda não estão implementados;
* pagamentos ainda não estão implementados;
* não possui documentação de casos de uso;
* não possui documentação da cobertura dos testes;
* não possui integração contínua;
* pode conter dependências e artefatos indevidos versionados;
* ainda não está preparado para produção.

---

## 🗺️ Roadmap

* [x] Configuração do Node.js;
* [x] Configuração do TypeScript;
* [x] Organização inicial;
* [x] Entidades de domínio;
* [x] Módulo de produtos;
* [x] Entidade de endereço;
* [x] Testes automatizados;
* [x] Prisma ORM;
* [x] Modelagem inicial do PostgreSQL;
* [ ] Finalizar módulo de categorias;
* [ ] Criar módulo de clientes;
* [ ] Criar módulo de pedidos;
* [ ] Criar módulo de pagamentos;
* [ ] Implementar camada HTTP;
* [ ] Documentar endpoints;
* [ ] Adicionar validação de entrada;
* [ ] Criar testes de integração;
* [ ] Configurar CI;
* [ ] Preparar ambiente com Docker.

---

## 🧪 Testes recomendados

| Cenário                      | Resultado esperado    |
| ---------------------------- | --------------------- |
| Criar produto válido         | Produto criado        |
| Produto sem nome             | Operação rejeitada    |
| Valor negativo               | Operação rejeitada    |
| Criar categoria              | Categoria criada      |
| Categoria duplicada          | Operação rejeitada    |
| Associar produto e categoria | Relacionamento criado |
| Produto inexistente          | Erro de domínio       |
| Persistência no PostgreSQL   | Registro salvo        |
| Falha no banco               | Erro tratado          |
| Atualização de produto       | Dados atualizados     |

---

## 🔐 Segurança

Nunca publique:

* `.env`;
* senhas do banco;
* credenciais;
* tokens;
* chaves privadas;
* dados reais de clientes.

Utilize dados fictícios em testes e demonstrações.

---

## 📚 Aprendizados desenvolvidos

* TypeScript;
* Node.js;
* Programação Orientada a Objetos;
* modelagem de domínio;
* entidades;
* objetos de valor;
* casos de uso;
* repositórios;
* testes automatizados;
* PostgreSQL;
* Prisma;
* arquitetura de software;
* aliases de importação;
* gerenciamento de dependências.

---

## 🎓 Contexto educacional

Projeto desenvolvido durante estudos acadêmicos relacionados a Programação Orientada a Objetos, aplicações web, APIs, banco de dados e arquitetura de software.

O repositório representa a evolução progressiva de uma aplicação de e-commerce, começando pelo domínio e avançando para persistência e testes.

---

## 👨‍💻 Autor

Desenvolvido por **Ernesto — ONestoDev**.

[![GitHub](https://img.shields.io/badge/GitHub-ONestoDev-181717?style=for-the-badge\&logo=github)](https://github.com/ONestoDev)

---

## 📄 Licença

O projeto declara a licença ISC no `package.json`.

Adicione também um arquivo `LICENSE` na raiz para formalizar as condições de uso, modificação e distribuição.
