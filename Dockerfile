FROM node:8.16.0-alpine

COPY package.json .

RUN apk update && npm install

CMD ["npm", "start"]
