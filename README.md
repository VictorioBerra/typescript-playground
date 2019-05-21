# typescript-playground

Project for quickly executing typescript. Optionally via webpack.

## Usage

- `git clone https://github.com/VictorioBerra/typescript-playground.git`
- `npm i`
- `npm start` for web or `npm run npm run start-server` to run locally in node.

## Motivation

The idea is you can read the [typescript handbook](https://www.typescriptlang.org/docs/handbook) or tutorials run `npm run start-server` and then edit `server.ts` with whatever you want and see it output on the console after compiling as a way to learn and play around.

## Features

Check out the `scripts` section of the `package.json`. The server and server-tsnode scripts both rely on nodemon. So you can hack up `server.ts` and slap `ctrl+s` and your changes will be compiled and ran live.

- `npm run start-server` - Mentioned above. Compiles all code in your server.ts and runs it in regular node.
- `npm run start-server-tsnode` - Runs your server.ts in the [TypeScript execution environment for Node.js called ts-node](https://github.com/TypeStrong/ts-node), basically skips all the webpack stuff entirely and runs it in a more native fashion.
- `npm start` - Compiles all code in your index.ts, and creates an index.html file and loads it in your browser. Learn typescript and test it in chrome!
- `lint` - Lets you list using eslint and the typescript parser and linter plugins. Helps you write better TypeScript.

## Suggestions for learning

- Play with the  `tsconfig` controls your target amd module settings.
- Write a couple modules and import them.
- Play with the eslint rules (`.eslintrc.js`).