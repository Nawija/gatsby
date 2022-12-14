import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ImgBurger from "../../assets/images/menu.svg"
import ArrowSVG from "../../assets/images/arrowMenu.svg"

const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`

const Logo = styled.span`
  font-size: 22px;
  font-weight: 600;
  font-family: "Courier New";
  z-index: 998;
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
  z-index: 997;
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
  border-radius: 0 0 0px 110px;
  transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(-150%)")};
  transition: transform .33s;
  overflow: hidden;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 20px;
    border-radius: 0;
    background-color: inherit;
    position: static;
    transform: translateY(0);
    background: transparent;
    margin-top: 0;
  }
`
const MenuBlur = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-color: rgba(228, 228, 228, 0.85);
z-index: -99;
@media (min-width: 600px) {
    display: none;
  }

`

const NavigationListItem = styled.li`
  margin-right: 32px;
  margin-top: 20px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: transform .33s ,color .33s;
  text-shadow: 1px 1px 7px white;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover{
    color: #b37e04;
    transform: scale(1.1);
  }

  @media (min-width: 600px) {
    margin-top: 0;
  }
`

const Navigation = () => {
  const [nav, showNav] = useState(false)

  return (
    <NavigationWrapper>
      <Logo onClick={() => showNav()}>
        <Link to="/">HATANA</Link>
      </Logo>
      <BurgerMenu onClick={() => showNav(!nav)}>
        <img src={nav ? ArrowSVG : ImgBurger} alt="Menu" />
      </BurgerMenu>
      <NavigationList onClick={() => showNav()} nav={nav}>
        <MenuBlur />
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
