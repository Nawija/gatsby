import * as React from "react"
import ImgHero from "../assets/images/hero.jpg"
import secondImg from "../assets/images/SecondImg.jpg"
import frameImg from "../assets/images/frame1.png"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
`
const ContainerRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
`
const ContainerCol = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  width: 100%;
`

const HeroDiv = styled.div`
  position: relative;
  left: 50%;
  height: 100%;
  width: 50%;
  background-image: url(${ImgHero});
  background-size: cover;
  background-position: center;
`
const TextHero = styled.h1`
  position: absolute;
  top: 45%;
  left: 25%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-align: start;
  width: min-content;
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  color: black;
  @media (min-width: 600px) {
    left: 28%;
    font-size: 2.3rem;
  }
  @media (min-width: 900px) {
    left: 25%;
    font-size: 3.2rem;
  }
  @media (min-width: 1400px) {
    left: 25%;
    font-size: 3.7rem;
  }
`
const BtnShowMore = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 25px;
  font-weight: bold;
  color: black;
  border: 15px solid white;
  background: linear-gradient(
    210deg,
    #be4e22 10%,
    rgba(251, 255, 250, 1) 42%,
    rgba(155, 155, 155, 0.5) 98%
  );
  transition: padding 0.33s, color 0.33s, border 0.33s;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    padding: 10px 30px;
    color: #be4e22;
    border: 21px solid white;
  }
  @media(min-width: 1200px){
    font-size: 110%;
  }
`
const SecondImg = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  background-image: url(${secondImg});
  background-size: cover;
  background-position: 50% 100%;
`
const DescriptionSecondImg = styled.p`
width: 50%;
padding: 0 3vh;
h2{
  text-align: center;
  padding: 2vh;
  text-transform: uppercase;
  font-size: 1.8rem;
}
@media (min-width: 1200px) {
  font-size: 1.3rem;
  h2{
    font-size: 2.3rem;
  }
}
`
const Texth2 = styled.div`
margin: 5vh 0 5vh;
font-size: 2rem;
font-weight: 600;
text-transform: uppercase;
text-decoration: underline;
`

const FrameImg = styled.div`
position: relative;
width: 100%;
height: 90%;
background-image: url(${frameImg});
background-size: cover;
background-position: center;
`

const IndexPage = () => (
  <>
    <Container>
      <HeroDiv />
      <TextHero>Welcome to HATANA project</TextHero>
      <BtnShowMore>
        <Link to="/about">About Me</Link>
      </BtnShowMore>
    </Container>
    <ContainerRow>
      <SecondImg />
      <DescriptionSecondImg>
      <h2>Description</h2>
        The designer of this artwork is American artist, Mark Kostabi. His
        abstract works often combine bold colours and shapes with a unique sense
        of texture and movement. He uses a variety of materials, including oil
        paint, acrylics, and collage, to create his art. Kostabi's artwork has
        been featured in numerous galleries and exhibitions around the world,
        including the Museum of Modern Art in New York City. This particular
        artwork is an abstract painting that features vivid blues, greens, and
        yellows, as well as a sense of movement. The composition is structured
        around a central, triangular shape, which is surrounded by various
        organic and geometric forms. The painting is full of energy and
        vitality, and conveys a sense of intense emotion.
      </DescriptionSecondImg>
    </ContainerRow>
    <ContainerCol>
      <Texth2>Best works</Texth2>
      <FrameImg />
    </ContainerCol>
  </>
)

export default IndexPage
