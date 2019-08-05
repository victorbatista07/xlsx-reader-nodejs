# Leia-me

## Requisitos

 - Docker version ^18.09
 - Docker-Compose version 1.24
 Ou:
 - Node version 8.10^
 - NPM version ^3.5

## Comandos
 - Se estiver usando docker e docker-compose
 1. docker-compose up
 - Se estiver usando node e npm
 1. npm install
 2. npm start

## Aplicação

Rotas:

- **GET /produtos**
Retorna um JSON com todos produtos

- **GET /produto/{ID}**
Retorna um JSON com o produto de {ID}

- **POST /produto/add**
Recebe um JSON com os dados do produto e cadastra no
arquivo CSV.
