## 1. React JSX and Rendering Elements
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