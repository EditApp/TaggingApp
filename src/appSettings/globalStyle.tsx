
import { createGlobalStyle } from 'styled-components'
import { colors } from './stylesSettings'
import { gradients } from './cssVariables'
import BgImg from '../assets/mountains.jpeg'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  fieldset {
    max-width: 100%;//todo check everywhere;
  }
  body {
    overflow-y: scroll;
    font-size: 16px;
    font-family: "Arial", sans-serif;
    -webkit-font-smoothing: (subpixel-antialiased);
    font-smoothing: (subpixel-antialiased);
    font-size: 1.1rem;
    line-height: 1.3rem;
    color: ${colors.gray};
    background:${gradients.biColorBlue};

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(${BgImg});
      background-size: cover;
      opacity: .1;
      content: "";
      z-index: -1;
    }
  }
  

  a {
    text-decoration: none;
    color: inherit
  }
  
  input, textarea, button {
    font-family: "Roboto", sans-serif;
  }
  *::selection,
  *:selection {
    background-color: transparent!important;
  }
  input:-internal-autofill-selected,
  input:-webkit-internal-autofill-selected {
    background-color: white!important;
  }

`

export default GlobalStyle