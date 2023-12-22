# Cronômetro Simples

Este é um projeto de cronômetro básico desenvolvido utilizando HTML, CSS, SASS, JavaScript, Jest e TypeScript.

## Funcionalidades

O cronômetro possui as seguintes funcionalidades:

- **Iniciar:** Inicia a contagem do cronômetro.
- **Pausar:** Pausa a contagem do cronômetro.
- **Reiniciar:** Reinicia o cronômetro, zerando o tempo.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

- [Node.js](https://nodejs.org/) (incluindo npm)
- [Jest](https://jestjs.io/) (para testes)
- [SASS](https://sass-lang.com/) (para compilar arquivos SASS)
- [TypeScript](https://www.typescriptlang.org/) (opcional, mas recomendado para desenvolvimento em TypeScript)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cronometro-simples.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd cronometro-simples
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   Isso instalará as dependências necessárias, incluindo Jest e TypeScript (se estiverem configurados no `package.json`).

4. Compile os arquivos SASS:

   ```bash
   npm run build:sass
   ```

   Isso compilará os arquivos SASS em CSS.

5. Inicie o projeto:

   ```bash
   npm start
   ```

   Isso iniciará um servidor local para visualizar o cronômetro no seu navegador.

## Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Isso executará os testes usando o Jest.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
cronometro-simples/
|-- src/
|   |-- js/
|   |   |-- time.js
|   |-- scss/
|   |   |-- style.scss
|-- tests/
|   |-- time.test.js
|-- index.html
|-- README.md
|-- package.json
|-- jest.config.js
|-- tsconfig.json
```

- `src/js/`: Contém o código JavaScript.
- `src/scss/`: Contém os arquivos SASS.
- `tests/`: Contém os testes escritos em Jest.
- `index.html`: Página principal do cronômetro.
- `README.md`: Este arquivo.
- `package.json`: Arquivo de configuração do npm.
- `jest.config.js`: Configuração do Jest.
- `tsconfig.json`: Configuração do TypeScript (se estiver sendo usado).