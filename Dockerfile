FROM node:6.10.3
WORKDIR /web-server
COPY . .
RUN npm config set registry https://registry.npm.taobao.org \
    && npm config get registry
RUN npm install \
    && npm install anywhere \
    && npm run build
CMD ["cd", "dist"]
CMD ["anywhere", "-h", "127.0.0.1", "-p", "8081"]
