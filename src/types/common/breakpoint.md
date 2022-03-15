# Please note:

- This hook seems to have some bugs, that it does not listen to changes

# MediaQuery Types

- We have created different types to use with MediaQuery

```ts
export enum MediaQueryEnums {
  isMobile = "(max-width: 30em)",
  isMedium = "(max-width: 48em)",
  isLarge = "(max-width: 62em)",
  isXLarge = "(max-width: 80em)",
  is2XLarge = "(max-width: 96em)",
  isLargerThan2XLarge = "(min-width: 96em)",
}
```

```tsx
const Header = () => {
  const [isMobile, isMedium, isLarge, isXLarge, is2XLarge, isLargerThan2XLarge] = useMediaQuery([
    MediaQueryEnums.isMobile,
    MediaQueryEnums.isMedium,
    MediaQueryEnums.isLarge,
    MediaQueryEnums.isXLarge,
    MediaQueryEnums.is2XLarge,
    MediaQueryEnums.isLargerThan2XLarge,
  ]);
  if (isMobile) {
    return (
      <Box>
        <HamburgerIcon />
      </Box>
    );
  } else if (isMedium) {
    return <Box>Medium</Box>;
  } else if (isLarge) {
    return <Box>Large</Box>;
  } else if (isXLarge) {
    return <Box>XLarge</Box>;
  } else if (is2XLarge) {
    return <Box>is2XLarge</Box>;
  } else if (isLargerThan2XLarge) {
    return <Box>isLargerThan2XLarge</Box>;
  } else {
    return <Box>Desktop</Box>;
  }
};

export default Header;
```
