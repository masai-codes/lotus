const Badge = {
  baseStyle: {
    textStyle: "btn-sm",
    borderRadius: "full",
  },
  sizes: {
    default: {
      p: "4px 8px",
    },
    lg: {
      p: "8px 12px",
    },
    "default-icon-only": {
      p: "4px",
    },
    "lg-icon-only": {
      p: "8px",
    },
  },
  variants: {
    blue: {
      bg: "ms-blue.50",
      color: "ms-blue.500",
    },
    red: {
      bg: "ms-red.50",
      color: "ms-red.500",
    },
    purple: {
      bg: "ms-purple.50",
      color: "ms-purple.500",
    },
    green: {
      bg: "ms-green.50",
      color: "ms-green.500",
    },
    cyan: {
      bg: "ms-cyan.50",
      color: "ms-cyan.500",
    },
    brick: {
      bg: "ms-brick.50",
      color: "ms-brick.500",
    },
  },
  defaultProps: {
    size: "default",
  },
};

export default Badge;
