FROM node:10-slim

EXPOSE 3000

WORKDIR /node

COPY package*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY . .

# Adding this line AFTER everything that needs root permissions
#  this creates all root files, and then locks the container down
#  to the node user
USER node

CMD ["node", "app.js"]
