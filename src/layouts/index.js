import * as React from "react"
import GlobalStyles from "../assets/styles/globalStyles"
import Navigation from "../components/Navigations/Navigation"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
  </>
)

export default MainLayout
