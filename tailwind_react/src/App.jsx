// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

let info = {
  name: "Jake Smith",
  age: 33,
  address: {
    city: "New York",
    state: "New York State",
    country: "USA",
  },
};
let age = [1, 2, 3, 4, 5, 6, 7];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-blue-400 p-1 rounded-md">
        React and Tailwind
      </h1>
      <Card username="John Doe" post="Publisher" myArr={age} />
      <Card />
      <Card username={info.name} address={info.address.city} />
    </>
  );
}

export default App;
