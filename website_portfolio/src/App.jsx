import { Box, Container, Divider } from "@mui/material";
import BasicInfo from "./Components/BasicInfo";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Container sx={{ width: "100%" }}>
      <Box sx={{ height: "80px" }}>Header</Box>
      <Divider sx={{ borderWidth: "1px", backgroundColor: "#242424" }} />
      <BasicInfo />
      <Divider sx={{ borderWidth: "1px", backgroundColor: "#242424" }} />
      {/* <Box>About Me</Box> */}
      <Footer />
    </Container>
  );
};

export default App;
