FROM node:8

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 80 for node, and 81 for webpack-dev
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT 81

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /home/node/app
COPY . .

RUN npm install && npm cache clean --force

CMD ["npm", "start"]
