# containerize a react app
# see https://dzone.com/articles/how-to-dockerize-reactjs-app

# Step 1
FROM node:18-alpine AS build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app

# Set the environment variable during the build step
# ARG REACT_APP_API_URL=/api
# ENV REACT_APP_API_URL=$REACT_APP_API_URL

ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2

FROM httpd:2.4

ENV REACT_APP_API_URL=/api
COPY --from=build-step /app/dist /usr/local/apache2/htdocs
#COPY config/config.json /usr/local/apache2/htdocs/config.json

