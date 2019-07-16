import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  overrides: {
    MuiTypography: {
      colorTextPrimary: { color: "#F1EFE8" }
    },
    MuiFormControl: {
      root: { height: 54, borderRadius: 5 }
    },
    MuiOutlinedInput: {
      input: { color: "#F1EFE8", fontSize: "1rem" }
    }
  },
  palette: {
    primary: { main: "#B38B58" },
    secondary: { main: "#A63E38" },
    error: { main: "#b32e27" }
  }
};

export default createMuiTheme(theme);
