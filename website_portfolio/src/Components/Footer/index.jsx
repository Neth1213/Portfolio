import { Box, Divider, IconButton, Typography } from "@mui/material";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/linkedIn.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
      }}
    >
      <IconButton
        sx={{ p: "5px 0" }}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/kenneth-uy-23413020a/",
            "_blank"
          );
        }}
      >
        <LinkedInSVG fill="#242424" />
      </IconButton>
      <IconButton
        sx={{ p: "5px 0" }}
        onClick={() => {
          window.open("https://github.com/Neth1213", "_blank");
        }}
      >
        <GitHub fill="#242424" />
      </IconButton>
      <Divider
        sx={{ borderWidth: "1px", backgroundColor: "#242424", m: "10px 5px" }}
        orientation="vertical"
        flexItem
      />
      <Typography sx={{ color: "#242424", p: "5px 0" }}>
        Made by Kenneth Uy
      </Typography>
    </Box>
  );
};

export default Footer;
