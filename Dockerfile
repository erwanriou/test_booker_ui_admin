FROM node:15.0.1-alpine

WORKDIR /app
COPY package.json .

RUN echo -e "registry=https://registry.npmjs.org \ntimeout=60000" > .npmrc
RUN echo -e "SKIP_PREFLIGHT_CHECK=true" > ".env"
RUN npm install --only=prod
RUN npm audit

COPY . .

CMD ["npm", "start"]
