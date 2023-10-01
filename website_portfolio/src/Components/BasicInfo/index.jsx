import { Box, Button, Typography } from "@mui/material";
import "./index.css";

const BasicInfo = () => {
  return (
    <>
      <Box
        sx={{
          m: "200px 100px",
          color: "#242424",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}
        >
          Hi, <br />
          I&apos;m <span style={{ color: "#BEBEBE" }}>Kenneth Uy</span> <br />
          Full Stack Developer
        </Typography>
        <Box sx={{ p: "5px" }}>
          <Button variant="contained" className="buttonContained" size="large">
            About Me
          </Button>
          <Button variant="outlined" className="buttonOutlined" size="large">
            Contact me!
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BasicInfo;
