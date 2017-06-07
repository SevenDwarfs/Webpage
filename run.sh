# for jenkins run shell
docker stop web-server
docker rm web-server
docker rmi web-server
docker build -t web-server .
docker run -d -v /root/webpage:/web-server/dist --name web-server web-server
