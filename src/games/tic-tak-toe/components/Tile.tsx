import { Card } from "@mui/material";
import circle from "../img/CircleSymbol.svg";
import x from "../img/XSymbol.svg";
import { useState } from "react";

function Tile({ onClick, isX }: { onClick: () => void; isX: boolean }) {
  const [isThisX, setThisX] = useState(isX);
  const [isPressed, setPressed] = useState(false);
  const handleClick = () => {
    if (!isPressed) {
      setPressed(true);
      setThisX(isX);
      onClick();
    }
  };
  return (
    <Card
      sx={{
        minHeight: 100,
        maxWidth: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      {isPressed && <img height={90} width={90} src={isThisX ? x : circle} />}
    </Card>
  );
}

export default Tile;
