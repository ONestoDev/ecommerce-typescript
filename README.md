# ecommerce-node-api

Descrição
-------
API Node em TypeScript para fins acadêmicos (projeto de prática e estudo de POO, APIs e boas práticas).

Status
------
Em desenvolvimento. Código principal em [src/index.ts](src/index.ts).

Pré-requisitos
--------------
- Node.js (recomendado >= 16)
- npm ou yarn
- TypeScript (está em devDependencies)

Instalação
---------
1. Instale dependências:

```bash
npm install
```

2. Para compilar com o TypeScript:

```bash
npx tsc
```

Executando em desenvolvimento
----------------------------
Você pode executar o código TypeScript diretamente com o Sucrase (já listado em `devDependencies`):

```bash
npx sucrase-node src/index.ts
```

Executando produção (build + node)
--------------------------------
```bash
npx tsc
node dist/index.js
```

Scripts sugeridos (adicione em `package.json` se desejar)
----------------------------------------------------
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "sucrase-node src/index.ts",
  "watch": "tsc -w"
}
```

Estrutura do projeto
--------------------
- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [src/index.ts](src/index.ts)

Contribuindo
-----------
Abra uma issue ou envie um pull request com melhorias. Para mudanças rápidas, descreva o objetivo e testes.

Autor
-----
Ernesto Silva
