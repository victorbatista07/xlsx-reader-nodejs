FROM node:8.16.0-alpine

COPY package.json .

RUN apk update && npm install && npm install -g nodemon

CMD ["npm", "start"]