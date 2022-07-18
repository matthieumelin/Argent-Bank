// styled
import { createGlobalStyle } from "styled-components";

// colors
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: ${Colors.neutral};
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main {
    flex: 1;
  }
`;