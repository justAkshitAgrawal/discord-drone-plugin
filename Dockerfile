FROM node:18

WORKDIR /harness

COPY package*.json /harness/

RUN npm install

COPY discord-ping.js /harness/

# CMD [ "node", "index.js" ]
ENTRYPOINT [ "node", "/harness/discord-ping.js" ]