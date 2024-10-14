// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-blue-400 p-1 rounded-md">
        React and Tailwind
      </h1>
      <Card username="John Doe" post="Publisher" />
      <Card />
    </>
  );
}

export default App;
