import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  overrides: {
    MuiTypography: {
      colorTextPrimary: { color: "#F1EFE8" }
    }
  },
  palette: {
    primary: { main: "#B38B58" },
    secondary: { main: "#A63E38" },
    error: { main: "#A63E38" }
  }
};

export default createMuiTheme(theme);
