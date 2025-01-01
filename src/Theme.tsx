import "@fontsource/atma";
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#C1666B", // red
    },
    secondary: {
      main: "#4281a4", // black
    },

    background: {
      default: "#D4B483",
      paper: "#E4DFDA", //white
    },
    text: {
      primary: "#1B0F37",
      secondary: "#4281a4",
    },
  },
  typography: {
    fontFamily: "'Atma', Arial, sans-serif",
    h4: {
      fontFamily: "'Atma', Arial, sans-serif",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "'Atma', Arial, sans-serif",
      fontWeight: 700,
    },
  },
});

export default Theme;
