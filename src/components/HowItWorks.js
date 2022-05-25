import styled from 'styled-components'
import { Section, Container, Card as CardContainer } from './Reusable.styled'
import {SubHeading , Text} from './Text.styled'
import {Location, Lock, House} from '../assets/'

export default function HowItWorks() {
  return (
    <Section
      flex
      column
    >
      <TextWrapper flex column>
        <SubHeading bold size={48} margin="5px auto" primary>
          How it works.
        </SubHeading>
        <Text large>
          This is how our product works
        </Text>
      </TextWrapper>

      <Container className="card_container" width="100%" flex Justify="space-between" padding="3em 0">
          <Card flex column>
            <ImageContainer>
              <Image src={Location} alt='Find Home'></Image>
            </ImageContainer>
            <Container padding="0" grid gap="9px" width="80%" className="card_text">
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
            <Container padding="0" grid gap="9px" width="80%" className="card_text">
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
            <Container padding="0" grid gap="9px" width="80%" className="card_text">
            <SubHeading>Make it Official</SubHeading>
            <Text>We have been in business for over 32 years,for client 
                outside the country you can trust us to deliver well.
            </Text>
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

`

const Card = styled(CardContainer)`
justify-content: space-evenly;
align-items: center;
padding: 5em 2em;
/* width:370px;
max-width: 438px; */
max-height: 539px;
text-align:center;
border-radius:0;
flex:0 1 438px;
gap:2em;
`

const Image = styled.img`
position:relative;
width:100%;
height:100%;
object-fit:contain;
`
const ImageContainer = styled(Container)`
width: 40%;
max-width:150px;
height: 30%;
padding:0;
`