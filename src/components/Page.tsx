import { Box } from "@mui/material";

function Page({ children }: { children?: JSX.Element[] | JSX.Element }) {
  return (
    <Box sx={{ padding: "2% 2% 2% 2%", minHeight: "100vh" }}>{children}</Box>
  );
}

export default Page;
