# Setup Instructions

## 1. Create a Folder for the App (Choose One)

**Using Yarn:**

```bash
yarn global add create-react-app
yarn create react-app AppName
```

## 2. Enter the Folder

    cd AppName
    code .

## 3. Dev depedencies install
    yarn add -D prettier
    yarn add -D babel-eslint
    npx install-peerdeps --dev eslint-config-airbnb
    yarn add -D eslint-config-prettier eslint-plugin-prettier

    or, use this instead

    scripts: {
    "lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"}  
