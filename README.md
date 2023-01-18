# BGIO Typed Storybook

[![TicTacToe CI](https://github.com/kokuyouwind/bgio-typed-storybook/actions/workflows/tictactoe_ci.yml/badge.svg)](https://github.com/kokuyouwind/bgio-typed-storybook/actions/workflows/tictactoe_ci.yml)
[![](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://main--638fd3bf1574c1214b46e940.chromatic.com/)

[日本語README](README.ja.md)

This repository is an example of a combined TypeScript and Storybook configuration based on boardgame.io's TicTacToe tutorial.

## Features

* Full TypeScript implementation including Server, Lobby
* Directory Structure using yarn packages + tsc project reference
* Develop server and build by Vite(except Server)
* Testing by Vitest
* Component Catalogs and Interaction Tests by Storybook
* AWS ECS Fargate Deploy by AWS Copilot CLI

## Usage

```
$ yarn install

# Start Development Environment(Server + Lobby)
$ yarn dev

# Start Docker Envirnoment(for production build testing)
$ docker compose up

# Format Codes in All Directories
$ yarn format:all
```

## Directory Structure

```
├── copilot       # AWS Copilot CLI Deploy Configurations
├── games
│   └── ticTacToe # TicTacToe Game Implementation
├── lobby         # Lobby Implementation
└── server        # Server Implementation
```
