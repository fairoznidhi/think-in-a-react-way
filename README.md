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

## 5. Settings

Follow the below settings for VS Code -

<ol>
<li>Create a new folder called ".vscode" inside the project root folder.</li>
<li>Create a new file called "settings.json" inside that folder.</li>
<li>Paste the below json in the newly created settings.json file and save the file.</li>
</ol>

```bash
{
// Theme
"workbench.colorTheme": "Dracula",

// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false,
"editor.defaultFormatter": null
},
"[javascriptreact]": {
"editor.formatOnSave": false,
"editor.defaultFormatter": null
},
"javascript.validate.enable": false, //disable all built-in syntax checking
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.fixAll.tslint": true,
"source.organizeImports": true
},
"eslint.alwaysShowStatus": true,
// emmet
"emmet.triggerExpansionOnTab": true,
"emmet.includeLanguages": {
"javascript": "javascriptreact"
}
}
```

## 6. React Documentation
**Previous One:** 
[React Documentation](https://legacy.reactjs.org/docs/getting-started.html)  
**React.dev:** 
[React.dev](https://react.dev/learn/start-a-new-react-project)  

## 7. Vite install (***)
This is so powerful. In newer create react app there is no create-react-app. Basic react is not present. So we can use vite instead. (Grab react and react-dom from npm, set up your custom build process with a bundler like [Vite](https://vitejs.dev/) or [Parcel](https://parceljs.org/), and add other tools as you need them for routing, static generation or server-side rendering, and more.)