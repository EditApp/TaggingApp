
import { createGlobalStyle } from 'styled-components'
import { colors } from './stylesSettings'
import { gradients } from './cssVariables'


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
    font-family: "Roboto", sans-serif!important;
    -webkit-font-smoothing: (subpixel-antialiased);
    font-smoothing: (subpixel-antialiased);
    font-size: 1.1rem;
    line-height: 1.3rem;
    color: ${colors.gray};
    background:${gradients.biColorBlue};
  }
  .rdt_Table {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit
  }

  .nakedButton {
    border: 0px solid transparent;
    background-color: transparent;
    margin: 0;
    padding: 0;
    text-align: left;
    display: inline;
  }
  .popupWider-content {
    width: 400px!important;
  }
  .popup-overlay  {
    background-color: transparent!important;
    z-index: 998;
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