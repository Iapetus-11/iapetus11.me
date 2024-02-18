FROM node:21-slim AS build

WORKDIR /iapetus11.me

COPY package.json package-lock.json /iapetus11.me/

RUN npm install

COPY . .

RUN npm run build

FROM node:21-slim AS run

WORKDIR /iapetus11.me

# copy over necessary files from build stage
COPY --from=build /iapetus11.me/.output/ ./.output/
COPY package.json package-lock.json ./

CMD ["node", ".output/server/index.mjs"]
