FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine as runner
COPY /build /usr/share/nginx/html
EXPOSE 80
