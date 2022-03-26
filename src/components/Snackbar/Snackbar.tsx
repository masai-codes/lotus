import React from 'react';
import useSnackBar from './useSnackbar';
export interface Props {
  type?: 'error' | 'success' | 'warning' | 'info' | undefined;
}
export const Snackbar = ({ type }: Props) => {
  const snackbar = useSnackBar();
  React.useEffect(() => {
    switch (type) {
      case 'error':
        snackbar.error(type);
        break;
      case 'success':
        snackbar.success(type);
        break;
      case 'warning':
        snackbar.warning(type);
        break;
      case 'info':
        snackbar.info(type);
        break;
    }
  }, []);
  return <div></div>;
};
