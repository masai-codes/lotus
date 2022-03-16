# lotus

## npm i @masaischool/lotus

## Access chromatic storybook deployed permalink:

https://main--623063b3e637ea003aa05f20.chromatic.com/

## How to use lotus ui library:

### Step 1: Install the package:

npm i  @masaischool/lotus

### Step 2: Add Lotus Theme wrapper in index.tsx file

`import { LotusTheme, ChakraProvider } from "@masaischool/lotus";`

`<ChakraProvider theme={LotusTheme}>
      <App />
</ChakraProvider>`

### Step 3: Import component as per the storybook documentation, eg: 

 `<Button variant="primary" size="sm">
        Hello
 </Button>`

