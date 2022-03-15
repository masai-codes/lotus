const Input = {
  baseStyle: {
    field: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "16px",
      fontFamily: "Open sans",
      borderRadius: "8px",
      _placeholder: { color: "brand.neutral.500" },
      border: "1px solid #CCCCCC ",
      _focused: {
        border: "1px solid #3470E4",
      },
      _disabled: {
        background: "#F3F2F2",
      },
    },
    addon: {
      fontSize: "16px",
      fontFamily: "Open sans",
      _disabled: {
        background: "#F3F2F2",
      },
    },
  },
  sizes: {
    lg: {
      field: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Open Sans",
        letterSpacing: "0em",
        fontStyle: "normal",
      },
    },
  },
  defaultProps: {
    size: "lg",
  },
};
export default Input;
