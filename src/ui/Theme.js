import { createTheme } from "@material-ui/core/styles";

const gold = "#d6ae87";
const white = "#fff";
const divider = "rgba(255, 255, 255, 0.3)";

export default createTheme({
  palette: {
    primary: {
      main: `${gold}`,
      contrastText: `${white}`,
    },
    divider: `${divider}`,
  },
});
