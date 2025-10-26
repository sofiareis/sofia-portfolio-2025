FROM node:22-bookworm-slim AS base

COPY . /tmp/app/

WORKDIR /tmp/app

RUN rm -rf .next/ && rm -rf .env && \
    npm install && \
    npm run build

FROM node:22-bookworm-slim AS runner

WORKDIR /app

# Copy standalone build output
COPY --from=base /tmp/app/.next/standalone ./
COPY --from=base /tmp/app/.next/static ./.next/static
COPY --from=base /tmp/app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]