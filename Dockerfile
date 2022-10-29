FROM node:16-alpine
WORKDIR /app

# install deps
ADD package.json .
ADD yarn.lock .
RUN yarn

# build
ADD . /app
RUN yarn build

# run
ENV PORT=7387
CMD ["yarn", "start"]
