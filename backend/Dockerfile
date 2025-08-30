FROM node:20-alpine
WORKDIR /usr/src/app
COPY  package.json ./

RUN yarn install --production --frozen-lockfile
COPY . .
EXPOSE 5000
CMD ["node", "src/server.js"]# test
