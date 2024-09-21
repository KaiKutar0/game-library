import { Box, Button, Grid2, Typography } from "@mui/material";
import Page from "../../components/Page";
import Tile from "./components/Tile";
import { useState } from "react";

function TicTacToe() {
  const [winner, setWinner] = useState<string>();
  const [data, setData] = useState(Array(9));
  const [isX, setX] = useState(true);
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWinner = (table: any[]) => {
    wins.forEach((win) => {
      if (
        table[win[0]] !== undefined &&
        table[win[1]] !== undefined &&
        table[win[2]] !== undefined
      ) {
        if (
          table[win[0]] === table[win[1]] &&
          table[win[1]] === table[win[2]] &&
          table[win[0]] === table[win[2]]
        ) {
          setWinner(isX ? "X wins" : "O wins");
        }
        if (!table.includes(undefined)) {
          setWinner("Draw");
        }
      }
    });
  };

  const clickHandler = (index: number) => {
    setX(!isX);
    data[index] = isX;
    console.log(data);
    checkWinner(data);
  };

  const reset = () => {
    setData(Array(9));
    setWinner(undefined);
    setX(true);
  };

  return (
    <Page>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {winner ? (
          <Box>
            <Typography variant="h1">{winner}</Typography>
            <Button onClick={reset}>Try again</Button>
          </Box>
        ) : (
          <Box sx={{ minWidth: 300 }}>
            <Grid2 container maxWidth={300} spacing={0.5}>
              {Array.from({ length: 9 }, (_, index) => (
                <Grid2 size={4} key={index}>
                  <Tile onClick={() => clickHandler(index)} isX={isX} />
                </Grid2>
              ))}
            </Grid2>
            <Typography>The next goes: {isX ? "X" : "O"}</Typography>
          </Box>
        )}
      </Box>
    </Page>
  );
}

export default TicTacToe;
