# specify the node base image with your desired version node:<version>
FROM node:6

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 80
CMD ["npm", "start"]