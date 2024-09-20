import { Box, Card, Divider, Grid2, Typography } from "@mui/material";
import logo from "./img/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
import Page from "./components/Page";

function Home() {
  const navigate = useNavigate();
  return (
    <Page>
      <Grid2 container>
        <Grid2>
          <Card sx={{ padding: "1vh 1vh 1vh 1vh" }}>
            <Box onClick={() => navigate("/tic-tac-toe")}>
              <img src={logo} height={100} width={100} />
            </Box>
            <Divider />
            <Typography fontWeight={900}>Tic Tac Toe</Typography>
          </Card>
        </Grid2>
      </Grid2>
    </Page>
  );
}

export default Home;
