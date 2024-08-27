**Element:**

```javascript
const element = (
  <h1 className="heading" tabIndex={index}>
    <span className="text">Hello {new Date().toLocaleTimeString()}</span>
    <img src="" />
  </h1>
);
```

**Component:**
What component returns is called an element.

```javascript
function Clock() {
  return (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello {new Date().toLocaleTimeString()}</span>
      <img src="" />
    </h1>
  );
}
```

**Two types of component:**

1. Functional Component
2. Class Component

**Benefits of component:**

```javascript
ReactDOM.render(Clock(), document.getElementById("root"));
ReactDOM.render(<Clock />, document.getElementById("root")); //both are same
```

1. <Clock/> is like html
2. Parameter can be given. <Clock locale='bn-BD'/>.
3. Component will take the parameter as object. {locale: "bn-bd",}
