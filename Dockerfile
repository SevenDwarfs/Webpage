FROM node:6.10.3
WORKDIR web-server
COPY . .
RUN npm config set registry https://registry.npm.taobao.org \
    && npm config get registry
RUN npm install \
    && npm install anywhere \
    && npm run build
WORKDIR dist
CMD ["../node_modules/anywhere/bin/anywhere", "-h", "127.0.0.1", "-p", "8081"]
