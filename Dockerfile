FROM node:18-alpine AS build

WORKDIR /iapetus11.me

# install dependencies
ADD package.json yarn.lock ./
RUN yarn

# copy remaining files and build
COPY . .
RUN yarn build

FROM node:18-alpine AS deploy

WORKDIR /iapetus11.me

RUN rm -rf ./*

# copy over necessary files from build stage
COPY --from=build /iapetus11.me/package.json .
COPY --from=build /iapetus11.me/build .

# install prod dependencies
RUN yarn --prod

CMD ["node", "index.js"]
