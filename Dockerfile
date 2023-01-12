FROM public.ecr.aws/docker/library/node:19.2.0-alpine as base
WORKDIR /app

COPY package.json yarn.lock ./
COPY server/package.json ./server/
COPY lobby/package.json ./lobby/
COPY games/ticTacToe/package.json ./games/ticTacToe/package.json
RUN yarn install --non-interactive --frozen-lockfile

FROM base as lobby-base
COPY tsconfig.json ./
COPY games ./games
COPY lobby ./lobby
RUN yarn workspace @bgio-typed-storybook/lobby build

FROM public.ecr.aws/nginx/nginx:1.18-alpine as lobby
WORKDIR /usr/share/nginx/html/
COPY --from=lobby-base /app/lobby/dist/lobby/index.html ./
COPY --from=lobby-base /app/lobby/dist/lobby/assets ./assets
