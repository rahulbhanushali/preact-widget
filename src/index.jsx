import "preact/debug";

import { h, render } from "preact";

import { useState } from "preact/hooks";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  // You can also pass a callback to the setter
  const decrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default function App(containerId) {
  // add a render method to the App component
  const el = document.getElementById(containerId);
  return render(h(Counter, el), el);
}

// export default render(<App />, document.getElementById("app"));
