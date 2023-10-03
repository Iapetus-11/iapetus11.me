FROM node:18-alpine AS build

WORKDIR /iapetus11.me

COPY . .
RUN npm i
RUN npm run sync
RUN npm run build

FROM node:18-alpine AS deploy

WORKDIR /iapetus11.me

RUN rm -rf ./*

# copy over necessary files from build stage
COPY --from=build /iapetus11.me/package.json .
COPY --from=build /iapetus11.me/build .

# install prod dependencies
RUN npm i --omit=dev --omit:optional

CMD ["node", "index.js"]
