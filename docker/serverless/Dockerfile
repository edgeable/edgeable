FROM oven/bun:0.6.13

RUN mkdir -p /usr/server

WORKDIR /usr/server

COPY ../../packages/serverless/package.json package.json
COPY ../../packages/serverless/bun.lockb bun.lockb

RUN bun install

COPY ../../packages/serverless/ .

EXPOSE 3000

ENTRYPOINT ["bun", "index.ts"]
