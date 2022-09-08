# Bridge Table

This is a Web Application built on Next.Js that simulates a Bridge game table.

### [Demo/preview](https://superlative-fenglisu-f21c55.netlify.app/)

## :page_facing_up: About
The app simulates a bridge table, It randomly distributing cards by the four players in the table (North, South, West, East), and shows the punctuation for each player according to the cards in its hand. It displays the total punctuation and the punctuation per suit in the deck(Spade [:spades:], Heart [:hearts:], Diamond [:diamonds:], Clubs [:clubs:]).

![App running displaying the initial screen with the Bridge Table](https://raw.githubusercontent.com/marcos-tomaz/bridge-table/main/images/BridgeApp.gif?raw=true)

## :wrench: Technologies
- Next.Js
- styled-components
- jest
- react-testing-library

## 💻 Prerequisites
- [NodeJs](https://nodejs.org/en/)
- [npm](https://nodejs.org/en/)/[yarn](https://yarnpkg.com/)

## 🚀 Installing and Running

1. Install the project dependencies by running the following command in the root foder

```bash
npm install

# or

yarn install
```
2. Start the app locally by running the following command in the root foder

```bash
npm run dev

# or

yarn dev
```
3. By default the app will be available on the `localhost` port `3000`.
## ☕ Testing
A test command is also available for this project and can be executed by running the following command:
```bash
npm test

# or

yarn test
```

Alternatively use the command bellow to keep the tests running on watch mode:
```bash
npm run test:watch

# or

yarn test:watch
```