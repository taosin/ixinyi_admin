FROM node:4.4.5-wheezy
MAINTAINER hades hi@iamhades.com
COPY . /root/yggdrasil
WORKDIR /root/yggdrasil
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
EXPOSE 8111
CMD node index.js