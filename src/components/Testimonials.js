import styled from 'styled-components'
import { Section, Container, Card as CardContainer ,Button as BTN } from './Reusable.styled'
import {SubHeading , Text, SmallText} from './Text.styled'

export default function Testimonials() {
  return (
    <Section
      flex
      column
      padding="3em"
    >
      <TextWrapper flex column>
        <SubHeading bold size={48} margin="7px auto" primary>
        Testimonials
        </SubHeading>
        <Text large>
        This is what our clients are saying.
        </Text>
        
      </TextWrapper>

      <Button>View More</Button>

      <Container className="card_container" flex Justify="Space-between">
        <Card flex column>
            <SubHeading size ={30} bold>Alex Godwin</SubHeading>
            <SmallText bold FTN2>South Africa</SmallText>
            <SmallText size ={22.24242} blur>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Fames ut dictumst urna, 
                lorem nibh. Pretium leo hendrerit interdum netus
            </SmallText>
        </Card>
        <Card flex column>
            <SubHeading size ={30} bold>Alex Godwin</SubHeading>
            <SmallText bold FTN2>South Africa</SmallText>
            <SmallText size ={22.24242} blur>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Fames ut dictumst urna, 
                lorem nibh. Pretium leo hendrerit interdum netus
            </SmallText>
        </Card>
        <Card flex column>
            <SubHeading size = {30} bold>Alex Godwin</SubHeading>
            <SmallText bold FTN2>South Africa</SmallText>
            <SmallText size = {22.24242} blur>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Fames ut dictumst urna, 
                lorem nibh. Pretium leo hendrerit interdum netus
            </SmallText>
        </Card>

      </Container>
     
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:1em;
justify-content:space-space-between;
align-items:center;
margin:0 auto;
max-width:954px;
text-align:center;
`

const Card = styled(CardContainer)`
justify-content: space-between;
max-width: 453.15px;
height: 238.09px;
`

const Button = styled(BTN)`
font-family: 'Nunito';
align-self:flex-end;
margin:1em 4em;
font-weight: 600;
font-size: 18.6868px;
border-radius: 18.6868px;
`