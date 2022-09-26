import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import mainTheme from '../styles/themes/main'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
