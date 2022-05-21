import styled from 'styled-components'
import { Section, Container } from './Reusable.styled'
import {SubHeading , Title, Text} from './Text.styled'
import {Ivy, Rexona, Palace} from '../assets/index'

export default function Features() {
  return (
    <Section
      flex
      column
      padding="3em"
    >
      <TextWrapper flex column>
        <SubHeading size='48px' primary>
        Our Featured Properties.
        </SubHeading>
        <Text large>
        One of our biggest product to be featured and that has sold out the most.
        </Text>
      </TextWrapper>

      <Container flex Justify="Space-between">
          <Card grid column>
            <Image src={Palace} alt='The Palace'/>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size = '31px'>The Palace</SubHeading>
                <Text>Duplex</Text>
            </Container>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <Text>Lekki, Phase 2</Text>
                <Text primary>$2,000</Text>
            </Container>
          </Card>
          <Card grid column padding="0">
            <Image src={Ivy} alt='Ivy Rory'/>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size = '31px'>Ivy Rory</SubHeading>
                <Text>Duplex</Text>
            </Container>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <Text>Lekki, Phase 2</Text>
                <Text primary>$2,000</Text>
            </Container>      
          </Card>
          <Card grid column>
            <Image src={Rexona} alt='Rexona'/>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size = '31px'>Rexona</SubHeading>
                <Text >Duplex</Text>
            </Container>
            <Container flex margin ="5px 0" padding="0" Justify='space-between' Align='baseline'>
                <Text>Lekki, Phase 2</Text>
                <Text primary>$2,000</Text>
            </Container>
          </Card>

      </Container>
     
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:0;
justify-content:space-evenly;
align-items:center;
margin:1em auto;
max-width:954px;
text-align:center;
`

const Card = styled(Container)`
justify-content: space-evenly;
align-items: center;
padding: 1em;
max-width: 415.49px;
max-height: 330.48px;
background: #FFFFFF;
box-shadow: 24px 24px 48px rgba(0, 0, 0, 0.05);
border-radius: 0px 39.7214px;
`

const Image = styled.img`
`