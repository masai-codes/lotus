## components

- _Customizing single components_
- **Usage:** Normal import of component from '@chakra-ui/react'
- [Component Style](https://chakra-ui.com/docs/theming/component-style)

## foundations

- _All the foundation elements of the theme._
- **Usage:** Use the key's of objects for those respective props of components, which take those props.
  - `<Box as="hr" my={2} />`
- [Base theme](https://chakra-ui.com/docs/theming/theme)

## TextStyles and LayerStyles

- **TextStyles:** _To repeatably apply a collection of text properties (like line height and size) to any component._
- **LayerStyles:** _A combination of styling attributes to re-use in other components._
- **Usage**: Use textStyle and layerStyle props.
  - `<Comp textStyle="body1">Masai School</Comp>`
- [Text and Layer Styles](https://chakra-ui.com/docs/features/text-and-layer-styles#layer-style)

## styles

- _Global styles are theme-aware styles you can apply to any html element globally._
- [Customizing global styles](https://chakra-ui.com/docs/theming/customize-theme#customizing-global-styles)

## theme.config

- _To extend or override a token in the default theme._
- [Customise Theme](https://chakra-ui.com/docs/theming/customize-theme#theme-extension-withdefaultcolorscheme)
