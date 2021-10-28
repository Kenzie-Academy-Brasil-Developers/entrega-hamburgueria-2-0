import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #27AE60;
    --secondary-color: #EB5757;
    
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-100: #E0E0E0;
    --grey-0: #F5F5F5;
    
    --negative: #E60000;
    --warnig: #FFCD07;
    --success: #168821;
    --information: #155BCB;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 14px;
  }
  
  h1 {
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0;
  }

  h2 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0;
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0;
  }
`;

export default GlobalStyle;
