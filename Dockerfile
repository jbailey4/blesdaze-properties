FROM node:12.22.1-alpine as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build:prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
