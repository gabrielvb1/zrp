
FROM node:20-alpine

WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3030

CMD ["node", "dist/index.js"]