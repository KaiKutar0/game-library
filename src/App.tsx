import { Route, Routes } from "react-router-dom";
import TicTacToe from "./games/tic-tak-toe/TicTacToe";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </>
  );
}

export default App;
