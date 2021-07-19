FROM node:12.16.3-alpine3.9

WORKDIR /cron-app
COPY ./package.json ./
RUN npm install --silent --only=prod
COPY . .
CMD ["npm", "start"]