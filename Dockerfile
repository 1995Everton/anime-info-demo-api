FROM node:latest

RUN apt-get update && \
    apt-get install apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt install yarn -y

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD yarn dev