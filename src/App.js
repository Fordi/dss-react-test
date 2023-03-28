// Each part of the test is contained
// within its own component as follows...
import { useState, useEffect } from "react";
import Part1 from "./Questions/Part1";
import Part2 from "./Questions/Part2";
import Part3 from "./Questions/Part3";

import "./styles.css";

export default function App() {
  const [tab, setTab] = useState(
    localStorage.getItem("currentPart") ?? "part1"
  );
  useEffect(() => {
    localStorage.setItem("currentPart", tab);
  }, [tab]);
  return (
    <div className="App">
      <h1 className="title">React Test</h1>

      <div className="tabs">
        <button className="tab" onClick={() => setTab("part1")}>
          Part 1
        </button>
        <button className="tab" onClick={() => setTab("part2")}>
          Part 2
        </button>
        <button className="tab" onClick={() => setTab("part3")}>
          Part 3
        </button>
      </div>
      <main>
        {tab === "part1" && <Part1 />}
        {tab === "part2" && <Part2 />}
        {tab === "part3" && <Part3 />}
      </main>
    </div>
  );
}
