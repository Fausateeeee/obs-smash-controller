import { extendTheme, type ThemeConfig, StyleProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/m-plus-rounded-1c'

const styles = {
  global: (props: StyleProps) => ({
    body: {
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
      bg: mode('#f7f4e9', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif",
}

const colors = {
  glassTeal: '#88ccca',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})

export default theme
