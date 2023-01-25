FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm install

COPY next.config.js ./next.config.js

COPY public ./public
COPY src ./src

CMD ["yarn", "dev"]