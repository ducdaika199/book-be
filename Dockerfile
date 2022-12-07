FROM node:16.15.1-alpine3.16

WORKDIR /usr/src/app
COPY src src
COPY package*.json ./
COPY .env .env

RUN npm ci --only=production

CMD [ "npm", "start" ]
