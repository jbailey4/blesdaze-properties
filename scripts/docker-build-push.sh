PROJECT_NAME="blesdaze-properties"

docker build --tag jbailey4/$PROJECT_NAME .
docker login -u jbailey4 -p $DOCKER_PASSWORD
docker push jbailey4/$PROJECT_NAME