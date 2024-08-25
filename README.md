## 1. React JSX and Rendering Elements
**index.js:**
```javaScript
import React from "react";
const element=React.createElement('h1',null,'Hello World!');
console.log(element);
/*
{
  type: "h1",
  props: {
    children: "Hello World!"
}
*/
```
**index.jsx/index.js + babel**
```javaScript
import React from "react";
const element=<h1>Hello World</h1>
console.log(element);
/*
{
  type: "h1",
  props: {
    children: "Hello World!"
}
*/
```
When you write JSX like this:  
```javascript
const element = <h1>Hello World</h1>;
```
Babel will transform it into something like this: 
```javascript 
const element = React.createElement('h1', null, 'Hello World!');
```
