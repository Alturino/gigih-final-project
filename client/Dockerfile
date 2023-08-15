FROM node:lts-alpine

WORKDIR /home/app

COPY package.json /home/app
RUN yarn install && yarn cache clean
COPY . /home/app
EXPOSE 5173
CMD [ "yarn", "dev" ]
