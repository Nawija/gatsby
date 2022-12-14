import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
}
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
main{
}
body{
    font-family: 'Courier New', Courier, monospace;
    scroll-behavior: smooth;    
}
button{
    cursor: pointer;
}
`
export default GlobalStyles
