twitter bot that will scrape the bio of the users and look for specific keywords, will then store the relevant users
in a mongo db database. 

to run the project:
1. Build the images
```shell
cd ./app/cron
docker build --tag wassimkha/cron-service:latest . && docker push wassimkha/cron-service:latest
cd /app/aggregator
docker build --tag wassimkha/aggregator-service:latest . && docker push wassimkha/aggregator-service:latest
```
2. deploy the kubernetes deployments
```shell
cd /k8s
kubectl apply -f ./cron-k8s/cron-deployment.yaml
cd /k8s
kubectl apply -f ./aggregator-k8s/aggregator-deployment.yaml
```
3. Setup Ingress Nginx
```shell
cd /k8s
kubectl apply -f ./ingress/ingress-controller.yaml
```