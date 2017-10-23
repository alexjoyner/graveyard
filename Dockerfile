# specify the node base image with your desired version node:<version>
FROM node:6

WORKDIR /home/node/app

COPY . .

CMD ["npm", "start"]