FROM node:22.3-bookworm-slim

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

COPY package-lock*.json /usr/src/app/package-lock.json

RUN npm ci

COPY . /usr/src/app

CMD ["npm", "start"]