import React from 'react';
import { useRef } from 'react';
import {
  useToast,
  ToastId,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

interface Props {
  type: 'error' | 'success' | 'warning' | 'info' | undefined;
  description: string;
  isClosable?: boolean;
}

const useSnackBar = () => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined | null>(null);

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function fireSnackBar({ type, description, isClosable }: Props) {
    toastIdRef.current = toast({
      position: 'top',
      render: () => (
        <Alert
          status={type}
          mx={{ sm: 'ms-8' }}
          minW={{ lg: '30rem' }}
          borderRadius="ms-8"
          bg={`ms-${type}`}
        >
          <AlertIcon color="white" />
          <AlertDescription color="white" textStyle="body1-md">
            {description}
          </AlertDescription>
          {isClosable && (
            <CloseButton
              position="absolute"
              right="ms-8"
              top="ms-8"
              color="white"
              _hover={{}}
              _focus={{ outline: 'none', bg: `ms-${type}` }}
              onClick={close}
            />
          )}
        </Alert>
      ),
    });
  }

  const methods = {
    success: (message: string, isClosable?: boolean) =>
      fireSnackBar({
        type: 'success',
        description: message,
        isClosable: isClosable || true,
      }),
    error: (message: string, isClosable?: boolean) =>
      fireSnackBar({
        type: 'error',
        description: message,
        isClosable: isClosable || true,
      }),
    warning: (message: string, isClosable?: boolean) =>
      fireSnackBar({
        type: 'warning',
        description: message,
        isClosable: isClosable || true,
      }),
    info: (message: string, isClosable?: boolean) =>
      fireSnackBar({
        type: 'info',
        description: message,
        isClosable: isClosable || true,
      }),
  };

  return { fireSnackBar, ...methods };
};

export default useSnackBar;
