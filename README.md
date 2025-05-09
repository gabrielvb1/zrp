# Pokémon Search

Este projeto é um monorepo que contém uma **API Node.js/Express** para buscar dados de Pokémon e um **frontend Vue.js** para exibir os resultados.

## Arquitetura e padrões

### API
A API, localizada na pasta `api/`, foi construída com **Node.js**, **Express**, e **TypeScript**, incluindo padrões SOLID, arquitetura Factory, e cobertura de testes.


### Frontend
O frontend, localizado na pasta `pokemon-search/`, é construído com **Vue.js 3** (usando **Composition API**), **Vite**. Ele consome a API para buscar e exibir dados de Pokémon, com uma interface simples.

## Pré-requisitos

Para rodar o projeto, você precisa de:
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/) (recomendado).
- Ou, alternativamente:
  - [Node.js](https://nodejs.org/) versão 20.x.
  - [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js).


## Como rodar o monorepo

### Usando Docker Compose (recomendado)
1. Clone o repositório:

2. Inicie a API e o frontend com Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acesse:
   - **Frontend**: `http://localhost:8080`
   - **API**: `http://localhost:3030/pokemon/<nome>` (ex.: `http://localhost:3030/pokemon/pikachu`)


### Rodando localmente
Para rodar localmente você devee

#### API
1. Navegar até a pasta da API:
   ```bash
   cd api
   ```

2. Instalar as dependências:
   ```bash
   npm install
   ```

3. Inicar a API com:
   ```bash
   npm run dev
   ```

4. A API estará disponível em `http://localhost:3030`.

#### Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd pokemon-search
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o frontend:
   ```bash
   npm run dev
   ```

4. O frontend estará disponível em `http://localhost:5173`.


## Como rodar os testes da API

A API inclui testes unitários para o `PokemonService`, escritos com **Jest** e configurados para TypeScript.

1. Navegue até a pasta da API:
   ```bash
   cd api
   ```

2. Instale as dependências (se ainda não o fez):
   ```bash
   npm install
   ```

3. Execute os testes:
   ```bash
   npm test
   ```

## Cobertura de testes (test coverage)

A API está configurada para gerar relatórios de cobertura de testes com o Jest.

1. Navegue até a pasta da API:
   ```bash
   cd api
   ```

2. Execute o comando de cobertura:
   ```bash
   npm run test:cov
   ```