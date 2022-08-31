import 'modern-normalize';
import { createGlobalStyle } from 'styled-components/macro';

// Resets and other css-related stuff that might be used globally - put it all here.
export const GlobalStyle = createGlobalStyle`

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

`;
