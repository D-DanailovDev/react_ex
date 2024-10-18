import { useState } from "react";
import "./App.css";

const colors = [
  "#ed8484",
  "#70c2f4",
  "#acc999",
  "#e2c24a",
  "#db88e8",
  "#bdc9c9",
];

function App() {
  const [color, setColor] = useState(colors[2]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor(colors[0])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[0] }}
          ></button>
          <button
            onClick={() => setColor(colors[1])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[1] }}
          ></button>
          <button
            onClick={() => setColor(colors[2])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[2] }}
          ></button>
          <button
            onClick={() => setColor(colors[3])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[3] }}
          ></button>
          <button
            onClick={() => setColor(colors[4])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[4] }}
          ></button>
          <button
            onClick={() => setColor(colors[5])}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: colors[5] }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
