FROM node:22-bookworm-slim as base

# Recebendo arquivos do projeto
COPY . /tmp/app/

# Gerando build
WORKDIR /tmp/app

RUN rm -rf .next/ && rm -rf .env && \
    npm install && \
    npm run build

RUN rm -rf /tmp/app/node_modules

FROM base as build

# Gerando build
WORKDIR /tmp/app
ENV NODE_ENV=production

RUN npm install

FROM node:22-bookworm-slim
WORKDIR /app
COPY --from=build /tmp/app/ .

CMD ["npm", "start"]