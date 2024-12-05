FROM node:lts-alpine3.20

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npx astro add tailwind --y

CMD ["npm", "start"]