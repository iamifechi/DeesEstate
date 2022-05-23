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
        <SubHeading bold size="48px" margin="5px auto" primary>
          How it works.
        </SubHeading>
        <Text large>
          This is how our product works
        </Text>
      </TextWrapper>

      <Container flex Justify="Space-between" padding="3em 0">
          <Card flex column>
            <Image src={Location} alt='Find Home'></Image>
            <Container padding="0" grid gap="9px">
            <SubHeading>Find Home</SubHeading>
            <Text>Our properties are located 
                at prime areas where by there 
                won’t be problem with transportation
            </Text>
            </Container>
          </Card>
          <Card flex column>
            <Image src={House} alt='Find Home'></Image>
            <Container padding="0" grid gap="9px">
            <SubHeading>Make Payments</SubHeading>
            <Text>Our estates comes with good network,portable water,
              24hrs light and round the clock security.
            </Text>
            </Container>
          </Card>
          <Card flex column>
            <Image src={Lock} alt='Keys'></Image>
            <Container padding="0" grid gap="9px">
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
padding: 3em 2em;
width: 438px;
height: 539px;
text-align:center;
border-radius:0;
`

const Image = styled.img`
position:relative;

&::after{
  position:absolute;
  content:"";
  height:400px;
  width:70px;
  border-radius:50%;
  background:#0F298B;
  color:black;
  left:0;
  right:0;
  margin:0 auto;
}
`