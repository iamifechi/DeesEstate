import styled from 'styled-components'
import { Section, Container,  Card as Cards , Button as BTN } from './Reusable.styled'
import {SubHeading , Text, SmallText} from './Text.styled'
import {Ivy, Rexona, Palace} from '../assets/index'

export default function Features() {
  return (
    <Section
      flex
      column
      padding="3em"
    >
      <TextWrapper flex column order="1">
        <SubHeading bold size={48} margin="7px auto" primary>
        Our Featured Properties.
        </SubHeading>
        <Text large>
        One of our biggest product to be featured and that has sold out the most.
        </Text>
        
      </TextWrapper>

      <Button order="3">View More</Button>

      <Container order="2" className="card_container" flex Justify="Space-between">
          <Card flex column>
            <Image src={Palace} alt='The Palace'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ={31} uppercase>The Palace</SubHeading>
                <SmallText>Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki,Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>
          </Card>
          <Card flex column>
            <Image src={Ivy} alt='Ivy Rory'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ={31} uppercase>Ivy Rory</SubHeading>
                <SmallText>Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki,Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>      
          </Card>
          <Card flex column>
            <Image src={Rexona} alt='Rexona'/>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SubHeading size ={31} uppercase>Rexona</SubHeading>
                <SmallText >Duplex</SmallText>
            </Container>
            <Container flex padding="0" Justify='space-between' Align='baseline'>
                <SmallText>Lekki,Phase 2</SmallText>
                <SmallText primary>$2,000</SmallText>
            </Container>
          </Card>

      </Container>
     
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:1em;
justify-content:space-between;
align-items:center;
margin:0 auto;
max-width:954px;
text-align:center;
`

const Card = styled(Cards)`
justify-content: center;
max-width: 415.49px;
height: 330.48px;
height:fit-content;
border-radius: 0px 39.7214px;
padding:7.94427px 15.8885px 14.2997px 38.9269px;

&:hover{
  transform:scale(1.02);
}
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

@media screen and (max-width:768px){
  order:3;
  margin:0;
}
`