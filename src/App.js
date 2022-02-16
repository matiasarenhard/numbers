import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <h2 className={number >= 0 ? "positive" : "negative"}>
        {  number >= 0 ? "Positivo" : "Negativo"}
      </h2>
      <input type="text" name="number" value={number} onChange={(event) => setNumber(event.target.value)} />
    </>
  );
}

export default App;
