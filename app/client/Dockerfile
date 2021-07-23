FROM node:12.16.3-alpine3.9

WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent --only=prod
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
CMD ["npm", "start"]