import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const togglePlayGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={togglePlayGame} />}</>
  );
}

export default App;
