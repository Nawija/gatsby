import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;   
    font-size: 62.5%;
}
*,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
main{
}
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
}
button{
    cursor: pointer;
}
`
export default GlobalStyles
