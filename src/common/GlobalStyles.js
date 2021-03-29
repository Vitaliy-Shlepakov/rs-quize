import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    main{
        width: 90%;
        margin: 0 auto;
    }
    
   svg {
    max-width: 100%;
    height: auto;
   }
`;
