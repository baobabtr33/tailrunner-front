#!/bin/bash

# develop stage
FROM node:14.21.3-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

# build stage
FROM --platform=linux/amd64 develop-stage as build-stage
RUN yarn build

# production stage
FROM --platform=linux/amd64 nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
