import borders from "./borders";
import breakpoints from "./breakpoints";
import colors from "./colors";
import radii from "./radius";
import shadows from "./shadows";
import spacing from "./spacing";
import typography from "./typography";
import blur from "./blur";

const foundations = {
  breakpoints,
  radii,
  blur,
  colors,
  ...typography,
  shadows,
  space: spacing,
  borders,
};

export default foundations;
