import React, { ReactElement, useState, useRef, useEffect } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
  Select,
  InputLeftAddon,
  FormControl,
  FormLabel,
  FormHelperText,
  InputRightElement,
  HStack,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import { FileInput } from './FileInput';
import { EyeOffOutline, EyeOutline } from '../../assets/icons/components';

export interface Props {
  label?: string;
  /** Placeholder*/
  placeholder?: string;
  /** Type of InputField */
  type?: 'text' | 'password' | 'email' | 'url' | 'tel' | 'file';
  /** input field with Leading dropdown */
  leadingDropdown?: boolean | null;
  /** input filed with trailing dropdown */
  trailingDropDown?: boolean;
  leadingText?: string;
  helperText?: string | null;
  rightIcon?: ReactElement;
  errorMessage?: string | null;
  leftIcon?: ReactElement | null;
  disabled?: boolean;
  /** The label for the check box */
  forVal?: string;
  /** Text to be displayed when input validation is a success */
  validateSuccessText?: string;
  /** Text to be displayed when input validation is a failure */
  validateErrorText?: string;
  /** Change whether the input is valid or not */
  isInvalid?: boolean;
  /** max length of input */
  maxlength?: number;
  /** InputField getValue callback */
  getValueCallback?: ((value: string) => void) | null;
  /** InputField getFile callback */
  getFileCallback?: ((value: File[]) => void) | null;
  getDropdownValueCallback?: ((value: string) => void) | null;

  /** Optional width setting */
  width?: string;
  /** Set if form has been submitted and clear value if it has */
  isSubmitted?: boolean;
  /** Prefilled value */
  preFilledValue?: string;
  /**
   * Disable autofill
   * added new-password, see
   * https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password
   * */
  autocomplete?: 'on' | 'off' | 'new-password';
  /** max files */
  maxFiles?: 1 | 2 | 3 | 4 | 5;
  /** min / max */
  min?: number;
  max?: number;
  isPasswordFiled?: boolean;
  size?: string;
  required?: boolean;
  onClick?: () => void;
}

export const Input = ({
  label,
  placeholder,
  type,
  leadingDropdown,
  trailingDropDown,
  leadingText,
  rightIcon,
  helperText,
  errorMessage,
  leftIcon,
  isInvalid,
  disabled,
  forVal,
  min,
  max,
  maxlength,
  preFilledValue,
  //   maxFiles = 1,
  //   getFileCallback = null,
  getValueCallback = null,
  autocomplete,
  isPasswordFiled,
  width,
  //   size,
  required,
  getDropdownValueCallback = null,
  onClick,
}: Props) => {
  const [value, setValue] = useState(preFilledValue);
  //   const [files, setFiles] = useState<File[] | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dropdownValue, setDropDownValue] = useState('');

  /** Need this for a case where pre-filled value in parent component gets changed later.  */
  useEffect(() => {
    setValue(preFilledValue);
  }, [preFilledValue]);

  /** eye icon current state */
  const [showPassword, setShowPassword] = useState(false);
  /** input filed current type */
  const [inputType, setInputType] = useState(type);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    // if (type === "file") {
    //   // * manage type files
    //   const filesFromInput =
    //     event.currentTarget.files && event.currentTarget.files;
    //   let filesArr: Array<File> = files ? [...files] : [];
    //   if (!filesFromInput) {
    //     return;
    //   }
    //   for (let i = 0; i < filesFromInput.length; i++) {
    //     filesArr.push(filesFromInput[i]);
    //   }
    //   // * Limit the number of uploaded files
    //   // * Only to show recent uploaded files, and old ones will be replaced by the new
    //   filesArr = filesArr.slice(-maxFiles);
    //   setFiles(filesArr);
    //   // * return if file
    //   if (getFileCallback !== null) {
    //     getFileCallback(filesArr);
    //   }
    //   return;
    // }
    setValue(event.currentTarget.value);
    if (getValueCallback !== null) {
      getValueCallback(event.currentTarget.value);
    }
  };
  // manage dropdown values
  const onOptionChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    setDropDownValue(event.currentTarget.value);
    if (getDropdownValueCallback !== null) {
      getDropdownValueCallback(event.currentTarget.value);
    }
  };

  /** manage password visibility state */
  const onEyeClick = (): void => {
    if (!disabled && type === 'password') {
      const newInputType = inputType === 'password' ? 'text' : 'password';
      setInputType(newInputType);
      const newEyeIcon: boolean = inputType === 'password' ? true : false;
      setShowPassword(newEyeIcon);
    }
  };

  return (
    <>
      <FormControl
        isInvalid={isInvalid}
        isDisabled={disabled}
        _disabled={{ color: 'ms-grey.500', bg: 'ms-grey.50' }}
        onSubmit={(e) => e.preventDefault()}
      >
        {label && (
          <FormLabel htmlFor={forVal}>
            <Text textStyle="body2-md" color="ms-red.900">
              {label}
            </Text>
          </FormLabel>
        )}
        <InputGroup
          width={width}
          borderColor={isInvalid ? 'ms-error' : 'ms-grey.300'}
          borderRadius="ms-8"
        >
          {leadingText && (
            <InputLeftAddon
              bgColor="inherit"
              _disabled={{ color: 'ms-grey.500', bgColor: 'ms-grey.50' }}
            >
              {leadingText}
            </InputLeftAddon>
          )}
          {leadingDropdown && (
            <InputLeftElement width="auto" sx={{ pl: 'ms-12' }}>
              <Select
                variant="unstyled"
                size="sm"
                fontWeight="semibold"
                value={dropdownValue}
                onChange={onOptionChange}
              >
                <option value="in">IN</option>
                <option value="as">AZ</option>
              </Select>
            </InputLeftElement>
          )}
          {leftIcon && (
            <InputLeftElement pointerEvents="none" sx={{ pl: 'ms-12' }}>
              {leftIcon}
            </InputLeftElement>
          )}
          {inputType == 'file' ? (
            <FileInput
              placeholder="placeholder"
              isRequired={false}
              ref={inputRef}
            />
          ) : (
            <ChakraInput
              required={required}
              type={inputType}
              placeholder={placeholder}
              errorBorderColor="none"
              value={value || ''}
              onChange={onInputChange}
              min={min}
              max={max}
              maxLength={maxlength}
              id={forVal}
              autoComplete={autocomplete}
              textStyle="body1"
              _placeholder={{ color: 'ms-grey.400' }}
              color="ms-red.900"
              defaultValue={preFilledValue}
              _hover={{ borderColor: isInvalid ? 'ms-error' : 'ms-grey.300' }}
              _focus={{ borderColor: isInvalid ? 'ms-error' : 'ms-blue.500' }}
              _disabled={{ bg: 'ms-grey.50', color: 'ms-grey.300' }}
              onClick={onClick}
            />
          )}
          {(rightIcon || trailingDropDown) && (
            <InputRightElement width="auto" pr="ms-14">
              {' '}
              <HStack spacing="ms-24" p="0">
                {rightIcon}
                {trailingDropDown && (
                  <Select
                    variant="unstyled"
                    size="sm"
                    fontWeight="semibold"
                    onChange={onOptionChange}
                  >
                    <option>LM</option>
                  </Select>
                )}
              </HStack>
            </InputRightElement>
          )}
          {isPasswordFiled && (
            <InputRightElement onClick={onEyeClick} pr="ms-14">
              {showPassword ? <EyeOutline /> : <EyeOffOutline />}
            </InputRightElement>
          )}
        </InputGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {errorMessage && (
          <FormErrorMessage color="ms-error" textStyle="body2">
            {errorMessage}
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
