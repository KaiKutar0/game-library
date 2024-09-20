import { Grid2, Typography } from "@mui/material";
import Page from "../../components/Page";
import Tile from "./components/Tile";
import { useState } from "react";

function TicTacToe() {
  const [data, setData] = useState<boolean[][]>(
    Array(3).fill(Array(3).fill(undefined))
  );
  const [isX, setX] = useState(true);

  const clickHandler = (index: number) => {
    setX(!isX);
    // setData([...data, isX]);
    console.log(data);
  };

  return (
    <Page>
      <Grid2 container maxWidth={300} spacing={0.5}>
        {Array.from({ length: 9 }, (_, index) => (
          <Grid2 size={4} key={index}>
            <Tile onClick={() => clickHandler(index)} isX={isX} />
          </Grid2>
        ))}
      </Grid2>
      <Typography>The next goes: {isX ? "X" : "O"}</Typography>
    </Page>
  );
}

export default TicTacToe;
