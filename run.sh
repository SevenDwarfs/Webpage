# for jenkins run shell
docker stop web-server
docker rm web-server
docker rmi web-server
docker build -t web-server .
docker run -d --name web-server web-server
docker cp web-server:/web-server/dist /root/webpage

