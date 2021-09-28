# INSTALLING RESSOURCES LOCALLY
npm run install:env

# ADD ENV VARIABLES
echo "REACT_APP_WEBKIT_URL=https://ik.imagekit.io/lqcpp5osrzf \nSKIP_PREFLIGHT_CHECK=true \nREACT_APP_LOCAL_DEV=true" > ".env"

# BUILD DOCKER IMAGE
CONTAINER_IMAGE=docker.pkg.github.com/erwanriou/test_booker_ui_admin/ui-admin
CONTAINER_NAME=BOOKER_CLIENT_ADMIN_LOCAL
docker rm $CONTAINER_NAME
docker build --tag $CONTAINER_IMAGE --file Dockerfile.local .
docker run -it --name $CONTAINER_NAME -p 3000:3000 -v /app/node_modules -v $(pwd):/app $CONTAINER_IMAGE
