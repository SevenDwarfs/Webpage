# for jenkins run shell
docker stop web-server
docker rm web-server
docker rmi web-server
docker build -t web-server .
docker run -d -p 127.0.0.1:8081:8081 --name web-server web-server

