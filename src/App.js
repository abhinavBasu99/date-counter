import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const d = new Date();
  d.setDate(d.getDate() + count);

  function handleStep(value) {
    setStep((s) => value);
  }

  function handleStepMinus() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }

  function handleStepPlus() {
    setStep((s) => (s < 10 ? s + 1 : s));
  }

  function handleCount(value) {
    setCount((c) => value);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="main">
      <h1>Date Counter</h1>
      <div className="steps">
        <button onClick={handleStepMinus}>-</button>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => handleStep(Number(e.target.value))}
        />
        {step}
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="counts">
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleCount(Number(e.target.value))}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p style={{ fontSize: "large" }}>
        {count === 0 && `Today is : ${d.toDateString()}`}
        {count > 0 &&
          `${Math.abs(count)} days from today is : ${d.toDateString()}`}
        {count < 0 && `${Math.abs(count)} days ago was : ${d.toDateString()}`}
      </p>
    </div>
  );
}

export default App;
