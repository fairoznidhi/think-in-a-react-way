# Setup Instructions

## 1. Create a Folder for the App (Choose One)

**Using Yarn:**

```bash
yarn global add create-react-app
yarn create react-app AppName
```

**Using NPM:**

```bash
npx create-react-app AppName
```

## 2. Enter the Folder

```bash
cd AppName
code .
```

## 3. Dev depedencies install
**Using Yarn:**
```bash
yarn add -D prettier
yarn add -D babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

Or, use this script instead:
```bash
scripts: {
    "lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"}
```
