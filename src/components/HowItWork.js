import styled from 'styled-components'
import { Section, Container, Card as Cards} from './Reusable.styled'
import {SubHeading , Text} from './Text.styled'
import {Location, Lock, House} from '../assets'

export default function HowItWorks() {
  return (
    <Section
      flex
      column
      padding="5em 2em 2em"
    >
      <TextWrapper flex column>
        <SubHeading bold size={48} margin="5px auto" primary>
          How it works.
        </SubHeading>
        <Text large>
          This is how our product works
        </Text>
      </TextWrapper>

      <CardContainer className="card_Card"  flex Justify="space-between" padding="3em 0">
          <Card flex column>
            <ImageContainer>
              <Image className='location' src={Location} alt='Find Home'></Image>
            </ImageContainer>
            <Container padding="0" grid gap="9px"  className="card_text">
            <SubHeading>Find Home</SubHeading>
            <Text>Our properties are located 
                at prime areas where by there 
                won’t be problem with transportation
            </Text>
            </Container>
          </Card>
          <Card flex column>
            <ImageContainer>
              <Image src={House} alt='Find Home'></Image>
            </ImageContainer>
            <Container padding="0" grid gap="9px"  className="card_text">
            <SubHeading>Make Payments</SubHeading>
            <Text>Our estates comes with good network,portable water,
              24hrs light and round the clock security.
            </Text>
            </Container>
          </Card>
          <Card flex column>
            <ImageContainer>
              <Image src={Lock} alt='Keys'></Image>
            </ImageContainer>
            <Container padding="0" grid gap="9px"  className="card_text">
            <SubHeading>Make it Official</SubHeading>
            <Text>We have been in business for over 32 years,for client 
                outside the country you can trust us to deliver well.
            </Text>
            </Container>
          </Card>

      </CardContainer>
     
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:0;
justify-content:space-evenly;
align-items:center;
margin:1em auto;
text-align:center;
`
const CardContainer = styled(Container)`
width:100%;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2em;

@media screen and (min-width:768px){
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
}
`

const Card = styled(Cards)`
justify-content: center;
align-items: center;
padding: 4em 2em;
width:32vw;
max-width: 438px;
min-width: 360px;
min-width: 300px;
text-align:center;
border-radius:0;
gap:1em;
position:relative;
//min-width: 351px;
height: 40vh;
min-height:329px;
max-height: 539px;
flex: 1 1 380px;

@media screen and (min-width:768px){
  min-height:524px;
}
`

const Image = styled.img`
position:relative;
width:100%;
height:100%;
object-fit:contain;
position:absolute;
bottom:0;
left:0;
right:0;
margin: 0 auto;

&.location{
  max-width: 70px;
  max-height: 150px;
}
`
const ImageContainer = styled(Container)`
padding:0;
position:relative;
height:150px;
`