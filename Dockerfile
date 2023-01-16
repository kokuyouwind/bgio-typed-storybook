FROM public.ecr.aws/docker/library/node:19.2.0-alpine as base
WORKDIR /app

COPY package.json yarn.lock ./
COPY server/package.json ./server/
COPY lobby/package.json ./lobby/
COPY games/ticTacToe/package.json ./games/ticTacToe/package.json
RUN yarn install --non-interactive --frozen-lockfile
COPY tsconfig.json ./
COPY games ./games


FROM base as lobby-base
ARG VITE_SERVER_URL

COPY lobby ./lobby
RUN yarn workspace @bgio-typed-storybook/lobby build


FROM public.ecr.aws/nginx/nginx:1.18-alpine as lobby
WORKDIR /usr/share/nginx/html/

COPY --from=lobby-base /app/lobby/dist/lobby/index.html ./
COPY --from=lobby-base /app/lobby/dist/lobby/assets ./assets


FROM base as server
ARG ORIGIN_URL

COPY server ./server
RUN yarn workspace @bgio-typed-storybook/server build
CMD ["yarn", "workspace", "@bgio-typed-storybook/server", "serve"]


FROM base as tictactoe-base
ENV NODE_ENV develop

RUN yarn workspace @bgio-typed-storybook/tic-tac-toe build


FROM public.ecr.aws/nginx/nginx:1.18-alpine as tictactoe
WORKDIR /usr/share/nginx/html/

COPY --from=tictactoe-base /app/games/ticTacToe/dist/client/index.html ./
COPY --from=tictactoe-base /app/games/ticTacToe/dist/client/assets ./assets
