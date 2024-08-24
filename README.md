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

## 3. Linting Setup (Dev depedencies install)
**Using Yarn:**
```bash
yarn add -D prettier
yarn add -D babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

**Or, use this script instead:(Add it into package.json-> scripts -> "lint":".....")**
```bash
"lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"
```

**and then simply run the below command in the terminal -**
```bash
yarn lint #or 'npm run lint'
```

## 4. Create Linting Configuration file manually
Create a <mark>.eslintrc</mark> file in the project root and enter the below contents:
```bash
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
}
```


