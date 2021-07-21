FROM node:12.16.3-alpine3.9

WORKDIR /app
COPY ./app/client/package.json ./
COPY ./app/client/package-lock.json ./
RUN npm install --silent --only=prod
RUN npm install react-scripts@3.4.1 -g --silent
COPY ./app/client/ ./
CMD ["npm", "start"]