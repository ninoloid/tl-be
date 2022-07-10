FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

COPY . .


EXPOSE 3000

CMD ["npm", "start"]