FROM node:8

ARG NODE_ENV

WORKDIR /usr/src/app

COPY package*.json ./

RUN if [ ${NODE_ENV} = "development" ]; then \
      npm install -g nodemon; \
    fi

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]