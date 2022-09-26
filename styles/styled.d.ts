import 'styled-components'

import mainTheme from './themes/main'

export type Theme = typeof mainTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
