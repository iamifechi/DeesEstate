import heroImage from '../assets/heroImage.png'
import styled from 'styled-components'
import { Container, Button } from './Reusable.styled'
import {Heading , Text} from './Text.styled'
function Hero() {
  return (
    <Container
      flex
      padding="3em"
      Justify="space-between"
    >
      <TextWrapper>
        <Heading>
          Helping you find the property of your dreams.
        </Heading>
        <Text>
          Creating quality urban lifestyles,building stronger communities
        </Text>
        <Button>Learn More</Button>

      </TextWrapper>
      <ImageWrapper/>
    </Container>
  )
}

export default Hero

const TextWrapper = styled.div`
display: grid;
flex-direction:column;
grid-template-rows:1fr 1fr 1fr;
gap:1em;
justify-content:space-evenly;
align-items:flex-start;
max-width:640px;
`
const ImageWrapper = styled.div`
background:url(${heroImage}) no-repeat;
width:100%;
max-width:736px;
height:511px;
`