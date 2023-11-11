import "./App.css";
import UseState from "./hooks/state";
import UseRef from "./hooks/ref";
import UseEffect from "./hooks/effect";
import UseMemo from "./hooks/memo";
import UseCallback from "./hooks/callback";

function App() {
  return (
    <>
      <h1>useState</h1>
      <UseState />
      <hr />
      <h1>useRef</h1>
      <UseRef />
      <hr />
      <h1>useEffect</h1>
      <UseEffect />
      <hr />
      <h1>useMemo</h1>
      <UseMemo />
      <hr />
      <h1>useCallback</h1>
      <UseCallback />
    </>
  );
}

export default App;
