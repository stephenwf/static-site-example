
FROM oven/bun:1 as base

WORKDIR /app

ENV NODE_ENV=production

FROM oven/bun:1 as build

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

FROM oven/bun:1 as final

USER bun

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/slots ./slots

EXPOSE 3000

CMD ["bun", "run", "start"] 