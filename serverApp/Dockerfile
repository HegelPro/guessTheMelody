FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . ./

EXPOSE 2000

CMD [ "nodemon", "src/index.js" ]