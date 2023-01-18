# BGIO Typed Storybook

[![TicTacToe CI](https://github.com/kokuyouwind/bgio-typed-storybook/actions/workflows/tictactoe_ci.yml/badge.svg)](https://github.com/kokuyouwind/bgio-typed-storybook/actions/workflows/tictactoe_ci.yml)
[![](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://main--638fd3bf1574c1214b46e940.chromatic.com/)

このリポジトリは [boardgame.io](https://boardgame.io/) の三目並べチュートリアルを TypeScript + Storybook 構成で実装したものです。

## 特徴

 * Server, Lobby を含めたフル TypeScript 実装
 * yarn packages + tsc project reference によるディレクトリ分割
 * Vite での開発サーバー起動・ビルド(Server のみtsc)
 * Vitest でのテスト
 * Storybook でのコンポーネントカタログとインタラクションテスト
 * AWS Copilot CLI を利用した AWS ECS Fargate へのデプロイ

## 使い方

```
$ yarn install

# 開発環境を起動(Server + Lobby)
$ yarn dev

# Docker環境を起動(本番ビルド検証用)
$ docker compose up

# 全ディレクトリのコードを整形
$ yarn format:all
```

## ディレクトリ構成

```
├── copilot       # AWS Copilot CLI デプロイ設定
├── games
│   └── ticTacToe # 三目並べゲーム実装
├── lobby         # ロビー実装
└── server        # サーバー実装
```
