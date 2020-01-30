import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#316879" },
    secondary: { main: "#f47a60" },
    error: { main: red.A400 },
    background: { default: "#ced7d8" }
  }
});
export default theme;
