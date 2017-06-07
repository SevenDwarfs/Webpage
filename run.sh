# for jenkins run shell

docker stop web-server
docker rm web-server
docker rmi kinpzz/web-server
docker build -t kinpzz/web-server
docker run -d -p 127.0.0.1:8081:8081 --name web-server kinpzz/web-server
