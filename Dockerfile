## BUILD APP ##

# node base image
FROM node:6-alpine

# install create-react-app
RUN npm install --global create-react-app

ENV REACT_APP_API_URL https://api.taiga.io/api/v1

# copy source code
COPY . .

# install dependencies && build production
RUN yarn install && \
  yarn run build

## RUN APP ##

# nginx base image
FROM nginx:1.13-alpine

# copy artifacts from previous build
COPY --from=0 /build /usr/share/nginx/html

EXPOSE 80


