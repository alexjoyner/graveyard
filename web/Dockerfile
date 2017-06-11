FROM node:8.1.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Install pm2 *globally* so we can run our application
RUN npm i -g pm2

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "run", "prod" ]
