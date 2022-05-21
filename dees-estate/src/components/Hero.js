import heroImage from '../assets/heroImage.png'
import styled from 'styled-components'
import { Section, Container, Button } from './Reusable.styled'
import {Heading , Text} from './Text.styled'

export default function Hero() {
  return (
    <Section
      flex
      padding="3em"
      Justify="space-between"
    >
      <TextWrapper flex column>
        <Heading primary>
          Helping you find the property of your dreams.
        </Heading>
        <Text large>
          Creating quality urban lifestyles,building stronger communities
        </Text>
        <Button>Learn More</Button>

      </TextWrapper>
      <ImageWrapper/>
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:0;
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