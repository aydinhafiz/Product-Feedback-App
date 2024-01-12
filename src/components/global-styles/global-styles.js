import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Jost", sans-serif;
  background: #f7f8fd;
}
`;
 
export default GlobalStyle;