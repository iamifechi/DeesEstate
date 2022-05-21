import House from '../assets/House.png'
import styled from 'styled-components'
import { Section, Container, TextWrapper, Image } from './Reusable.styled'
import {Heading , Text} from './Text.styled'
import {Check} from '../assets'


export default function AboutUS() {
  return (
    <Section
      flex
      Justify="space-between"
    >
        <ImageWrapper/>
        <TextWrapper flex column>
        <Heading primary>
        Why you should choose us. 
        </Heading>
        <Text large>
            Creating quality urban lifestyles,building stronger communities
        </Text>
        <Container grid GTC="1fr 1fr" padding="1em 0">
            <Text em>
                <Image src={Check} alt="Check"/>{" "}
                World Class
            </Text>
            <Text em>
                <Image src={Check} alt="Check"/>{" "}
                Affordable
            </Text>
            <Text em>
                <Image src={Check} alt="Check"/>{" "}
                Trusted
            </Text>
            <Text em>
                <Image src={Check} alt="Check"/>{" "}
                Amenities
            </Text>
        </Container>

        </TextWrapper>
      
    </Section>
  )
}


const ImageWrapper = styled.div`
background:url(${House}) no-repeat;
width:100%;
max-width:736px;
height:511px;
`