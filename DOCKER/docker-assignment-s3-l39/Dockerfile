FROM node:alpine
EXPOSE 3000
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm cache verify


CMD ["npm", "start"]