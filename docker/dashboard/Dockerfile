FROM oven/bun:0.6.13

RUN mkdir -p /usr/server

WORKDIR /usr/server

COPY ../../packages/api/package.json package.json
COPY ../../packages/api/bun.lockb bun.lockb

RUN bun install

COPY ../../packages/api/ .

EXPOSE 3000

ENTRYPOINT ["bun", "index.ts"]
