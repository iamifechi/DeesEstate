import styled from 'styled-components'
import { Section, Container } from './Reusable.styled'
import {SubHeading , Title, Text} from './Text.styled'
import {Location, House, Lock} from '../assets/index'

export default function HowItWorks() {
  return (
    <Section
      flex
      column
      padding="3em"
    >
      <TextWrapper flex column>
        <SubHeading primary>
          How it works.
        </SubHeading>
        <Text large>
          This is how our product works
        </Text>
      </TextWrapper>

      <Container flex Justify="Space-between">
          <Card flex column>
            <Image src={Location} alt='Find Home'></Image>
            <SubHeading>Find Home</SubHeading>
            <Text>Our properties are located 
                at prime areas where by there 
                won’t be problem with transportation
            </Text>
          </Card>
          <Card flex column>
            <Image src={House} alt='Find Home'></Image>
            <SubHeading>Make Payments</SubHeading>
            <Text>Our estates comes with good network,portable water , 
                24hrs light and round the clock security.
            </Text>
          </Card>
          <Card flex column>
            <Image src={Lock} alt='Keys'></Image>
            <SubHeading>Make it Official</SubHeading>
            <Text>We have been in business for over 32 years,for client 
                outside the country you can trust us to deliver well.
            </Text>
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

const Card = styled(Container)`
justify-content: space-evenly;
align-items: center;
padding: 3em;
width: 438px;
height: 539px;
background: #FFFFFF;
box-shadow: 24px 24px 48px rgba(0, 0, 0, 0.05);
text-align:center;
`

const Image = styled.img`
`