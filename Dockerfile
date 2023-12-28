FROM node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
CMD ["yarn", "start"]