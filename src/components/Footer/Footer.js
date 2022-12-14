import * as React from "react"
import styled from "styled-components"

const FooterBg = styled.div`
  position: relative;
  height: 35vh;
  width: 100%;
  margin-top: 10vh;
  background-color: #1a1819;
  color: white;
  h3{
    weight: 100%
    margin: 0 auto;
  }
`
const FooterWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  weight: 100%;
  height: 90%;
`

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Footer = () => (
  <>
    <FooterBg>
        <h3>Subscribe Us</h3>
      <FooterWrapper>
        <ContainerCol>
          <p>Contact</p>
          <p>Tel: (+48) 555-056-898</p>
          <p>Mail: Krabidoligot@gmail.com</p>
          <p>Fb: Darion23</p>
        </ContainerCol>
        <ContainerCol>
          <p>Contact</p>
          <p>Tel: (+48) 555-056-898</p>
          <p>Mail: Krabidoligot@gmail.com</p>
          <p>Fb: Darion23</p>
        </ContainerCol>
      </FooterWrapper>
    </FooterBg>
  </>
)

export default Footer
