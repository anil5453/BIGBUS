const customizedMuiComponents = {
  MuiTypography: {
    root: {
      fontFamily: "Lato !important",
    },
    body1: {
      fontSize: "12px",
    },
  },
  MuiButton: {
    root: {
      borderRadius: "150px !important",
      "&.Mui-disabled": {
        color: "rgba(0,0,0,0.6) !important",
      },
    },
  },
  MuiFormLabel: {
    asterisk: {
      color: "#db3131 !important",
      "&$error": {
        color: "#db3131",
      },
    },
  },
};

export default customizedMuiComponents;
