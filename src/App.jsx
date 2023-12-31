import { useState } from "react";

const Display = ({ counter }) => {
  return <div className="display-counter">{counter}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter((prev) => prev - 1);

  return (
    <div className="container">
      <h1>Counter</h1>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
