import reset from 'styled-reset'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 300;
  }

  p {
    margin: 1rem 0;

    & + & {
      margin-top: 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  b, strong {
    font-weight: 700;
  }
`
