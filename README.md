## 1. React JSX and Rendering Elements
**index.js doing the work**
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
**index.jsx/index.js + babel doing the work**
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

**Attribute:**
```javascript
//const element= React.createElement('h1',{className:'heading'},'Hello World!');
const element= <h1 className='heading'>Hello World!</h1>
```
```javascript
//const element= React.createElement('h1',{className:'heading'},'Hello World!');
const index=0;
const element= (
    <h1 className='heading' tabIndex={index}>
    Hello World!
    </h1>
);
/*
element={
  type: 'h1',
  props:{
    className: 'heading',
    tabIndex: 0,
    children: 'Hello World!',
  },
};
*/
```
```javascript
const index=0;
const element= (
    <h1 className='heading' tabIndex={index}>
      <span className='text'>Hello World!</span>
      <img src=''/>
    </h1>
);
/*
element={
  type: 'h1',
  props:{
    className: 'heading',
    tabIndex: 0,
    children: [
      {
        type: 'span',
        props: {
          className: 'text'
        }
      },
      {
        type: 'img',
        props: {
          src:''
        }
      },
    ],
  },
};
*/
```
