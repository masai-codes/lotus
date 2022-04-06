# lotus

## npm i @masaischool/lotus

## Access chromatic storybook deployed permalink:

https://main--623063b3e637ea003aa05f20.chromatic.com/

## Demo Repo:

Github Link: https://github.com/nitansh11/lotus-demo
Deployed Link: https://lotus-demo.netlify.app/

## How to use lotus ui library:

### Step 1: Install the package:

npm i @masaischool/lotus

### Step 2: Add Lotus Theme wrapper in index.tsx file

`import { LotusTheme, ChakraProvider } from "@masaischool/lotus";`

`<ChakraProvider theme={LotusTheme}> <App /> </ChakraProvider>`

### Step 3: Import component as per the storybook documentation, eg:

`<Button variant="primary" size="sm"> Hello </Button>`

## Customize theme as per your own design requirement:

### Step 1: Import default LotusTheme from lotus library, LotusTheme already has some default customized styling done using extendTheme component provided by Chakra UI. For reference: https://chakra-ui.com/docs/styled-system/theming/customize-theme

`import { LotusTheme } from "@masaischool/lotus";`

### Step 2: Make styles object which you want to override by following syntax provided by Chakra UI, for example we want to override "styles" object of the theme, we need to create our styles object like this.

Note: Below syntax is defined in chakra documentation for all objects like styles, layerStyles,textStyles,components etc. (Reference Link:  https://chakra-ui.com/docs/styled-system/theming/customize-theme)
<pre>
const styles = {
  global: {
    body: {
      m: "0px",
    },
    h1: {
      fontWeight: "800!important",
      fontSize: "48px!important",
      lineHeight: "62px!important",
      bgColor: "red",
    },
    h2: {
      fontWeight: "700!important",
      fontSize: "34px!important",
      lineHeight: "40px!important",
    },
    h3: {
      fontWeight: "700!important",
      fontSize: "24px!important",
      lineHeight: "32px!important",
    },
    h4: {
      fontWeight: "700!important",
      fontSize: "20px!important",
      lineHeight: "28px!important",
    },
    h5: {
      fontWeight: "700!important",
      fontSize: "18px!important",
      lineHeight: "24px!important",
    },
    h6: {
      fontWeight: "700!important",
      fontSize: "16px!important",
      lineHeight: "20px!important",
    },
  },
};
</pre>
### Step 3: Override "styles" object with existing "styles" object:

`const customTheme = extendTheme({ ...LotusTheme, styles });`

### Step 4: Now we can use our customTheme in ChakraProvider:

` <ChakraProvider theme={customTheme}>
      <App />
   </ChakraProvider>`

