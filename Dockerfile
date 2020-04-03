FROM node:12-slim
WORKDIR /app
COPY package.json /app
run npm install
copy . /app
cmd ["npm", "start"]