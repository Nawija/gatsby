import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ImgBurger from "../../assets/images/menu.svg"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`

const Logo = styled.span`
  font-size: 22px;
  font-weight: 600;
  font-family: "Courier New";
  z-index: 999;
  margin-right: 35px;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const BurgerMenu = styled.button`
  padding: 0 10px;
  border: none;
  background-color: transparent;
  z-index: 999;
  @media (min-width: 600px) {
    display: none;
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  height: 30vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0px;
  list-style: none;
  background-color: #d7d7d7d7;
  transform: ${({nav}) => (nav ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 1s;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 20px;
    background-color: inherit;
    position: static;
    transform: translateY(0);
    margin-top: 0;
  }
`
const NavigationListItem = styled.li`
  margin-right: 32px;
  margin-top: 20px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 600px) {
    margin-top: 0;
  }
`

const Navigation = () => {
  const [nav, showNav] = useState(false)

  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">HATANA</Link>
      </Logo>
      <BurgerMenu onClick={()=> showNav(!nav)}>
        <img src={ImgBurger} alt="Menu" />
      </BurgerMenu>
      <NavigationList onClick={()=> !showNav() } nav={nav}>
        <NavigationListItem>
          <Link to="/articules">articules</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/about">about</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/gallery">gallery</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">contact</Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
