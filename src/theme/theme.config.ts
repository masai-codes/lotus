import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';
import styles from './styles';
import textStyles from './TextStyles';
import layerStyles from './LayerStyles';

const theme = extendTheme({
  components,
  ...foundations,
  styles,
  textStyles,
  layerStyles,
});

export default theme;
