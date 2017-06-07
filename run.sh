# for jenkins run shell
docker stop web-server
docker rm web-server
docker rmi kinpzz/webserver
docker build -t kinpzz/webserver .
docker run -d -p 127.0.0.1:8081:8081 --name web-server kinpzz/webserver
