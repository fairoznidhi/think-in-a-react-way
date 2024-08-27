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

1. `<Clock/>` is like html
2. Parameter can be given. `<Clock locale='bn-BD'/>`.
3. Component will take the parameter as object. `{locale: "bn-bd",}`

**Code(Component based)**
(Time is not updating)

```javascript
import React from "react";
import ReactDOM from "react-dom";
const index = 0;

function Clock({ locale }) {
  return (
    <h1 className="heading" tabIndex={index}>
      <span className="text">
        Hello {new Date().toLocaleTimeString(locale)}
      </span>
      <img src="" />
    </h1>
  );
}

// ReactDOM.render(Clock(), document.getElementById("root"));
ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));
```

**Code(Class based)**  
But this is still isn't a component. We have to extend this.

```javascript
import React from "react";
import ReactDOM from "react-dom";
const index = 0;

class Clock {
  print() {
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">Hello {new Date().toLocaleTimeString()}</span>
        <img src="" />
      </h1>
    );
  }
}

const ClockComponent = new Clock();
ReactDOM.render(ClockComponent.print(), document.getElementById("root"));
```

**Code(Class based)**

```javascript
import React from "react";
import ReactDOM from "react-dom";
const index = 0;

class Clock extends React.Component {
  // We need to use this for accessing props
  render() {
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">
          Hello -{this.props.children}{" "}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
        <img src="" />
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">test</Clock>,
  document.getElementById("root")
);
```

**Component vs Class**

1. We can only pass props through component, but class gives stateful characteristics that it can create a state and can change the state itself.

**React will rerender when props change**  
Props will change from outside  

```javascript
class Clock extends React.Component {
  // We need to use this for accessing props
  render()
    this.props.locale=''; //If we write this, react will fall into an infinite loop
    // Each time it will re-render when the props changes
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">Hello -{this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
        <img src="" />
      </h1>
    );
  }
}

ReactDOM.render(<Clock locale='bn-BD'>test</Clock>, document.getElementById("root"));
```
