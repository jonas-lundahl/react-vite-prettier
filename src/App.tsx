import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Clock from "./components/clock/Clock";
import useToggle from "./hooks/use-toggle";

function App() {
  const [count, setCount] = React.useState(0);
  const [showEmoji, toggleEmoji] = useToggle();

  React.useEffect(() => {
    function handleMouseMove() {
      setCount((count) => count + 1);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      {APP_VERSION && <p>Version: {APP_VERSION}</p>}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}!!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Clock />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={toggleEmoji}>Toggle Emoji</button>
      {showEmoji && <p>😀😃😄😁😆😅😂🤣</p>}
    </div>
  );
}

export default App;
