import styled from 'styled-components'
import { Section, Container,  Card as CardContainer , Button as BTN } from './Reusable.styled'
import {SubHeading , Text, SmallText} from './Text.styled'
import {Ivy, Rexona, Palace} from '../assets/index'

export default function Features() {
  return (
    <Section
      flex
      column
      padding="3em"
    >
      <TextWrapper flex column>
        <SubHeading bold size='48px' margin="7px auto" primary>
        Our Featured Properties.
        </SubHeading>
        <Text large>
        One of our biggest product to be featured and that has sold out the most.
        </Text>
        
      </TextWrapper>

      <Button>View More</Button>

      <Container flex Justify="Space-between">
          <Card flex column>
            <Image src={Palace} alt='The Palace'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ='31px' uppercase>The Palace</SubHeading>
                <SmallText>Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki, Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>
          </Card>
          <Card flex column>
            <Image src={Ivy} alt='Ivy Rory'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ='31px' uppercase>Ivy Rory</SubHeading>
                <SmallText>Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki, Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>      
          </Card>
          <Card flex column>
            <Image src={Rexona} alt='Rexona'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ='31px' uppercase>Rexona</SubHeading>
                <SmallText >Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki, Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>
          </Card>

      </Container>
     
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:1em;
justify-content:space-space-between;
align-items:center;
margin:1em auto;
max-width:954px;
text-align:center;
`

const Card = styled(CardContainer)`
justify-content: center;
max-width: 415.49px;
height: 330.48px;
border-radius: 0px 39.7214px;
padding:7.94427px 15.8885px 14.2997px 38.9269px;
`

const Image = styled.img`
width:100%;
margin-bottom:1em;
`

const Button = styled(BTN)`
font-family: 'Nunito', sans-serif;
align-self:flex-end;
margin:1em 4em;
font-weight: 600;
font-size: 18.6868px;
border-radius: 18.6868px;
`