import * as React from "react"
import GlobalStyles from "../assets/styles/globalStyles"
import Navigation from "../components/Navigations/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
