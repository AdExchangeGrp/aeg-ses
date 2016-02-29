FROM adexchangegrp/node:latest

ENV NODE_ENV development

COPY . /src
WORKDIR /src
RUN git remote set-url origin git@github.com:AdExchangeGrp/aeg-ses.git
RUN npm install