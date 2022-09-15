FROM node:16

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY *.json /usr/src/app/ 
RUN npm install 

COPY . /usr/src/app/ 
RUN yarn install 
RUN yarn build

RUN groupadd -g 992 www
RUN useradd -u 992 -ms /bin/bash -g www www


EXPOSE 3000
CMD [ "npm", "start" ]
