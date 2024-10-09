import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => setCounter(counter + 1);
  const removeValue = () => setCounter(counter - 1);

  return (
    <>
      <h1>sample counter {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add:</button>{" "}
      <button onClick={removeValue}>Remove:</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
