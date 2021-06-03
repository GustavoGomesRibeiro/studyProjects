import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
   padding: 0;
   margin: 0;
   outline: 0;
   box-sizing: border-box; 
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    /* background: #f9f9f9; */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #7159c1;
}

html, body, #root{
    height: 100%;
}
`;