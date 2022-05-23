import styled from 'styled-components'
import { Section, Container, TextWrapper, Icon } from './Reusable.styled'
import {Heading , Text} from './Text.styled'
import {About, Check} from '../assets'


export default function AboutUS() {
  return (
    <Section
      flex
      Justify="space-between"
      padding="3em 5em"
    >
        <ImageWrapper/>
        <ContentWrapper grid>
        <Title primary>
        Why you should choose us. 
        </Title>
        <Text margin="9px 0">
            Creating quality urban lifestyles,building stronger communities
        </Text>
        
        <Container grid GTC="1fr 1fr" padding="1em 0">
            <Text em bold margin="0 0 19px 0">
                <Icon image={Check}/>
                World Class
            </Text>
            <Text bold margin="0 0 19px 0">
                <Icon image={Check}/>
                Affordable
            </Text>
            <Text bold margin="0 0 19px 0">
                <Icon image={Check}/>
                Trusted
            </Text>
            <Text bold margin="0 0 19px 0">
                <Icon image={Check}/>
                Amenities
            </Text>
        </Container>

        </ContentWrapper>
      
    </Section>
  )
}


const ImageWrapper = styled.div`
background:url(${About}) no-repeat;
width:100%;
max-width:736px;
height:511px;
`
const ContentWrapper = styled(TextWrapper)`
align-content: start;
`

const Title = styled(Heading)`
font-weight: 700;
font-size: 48px;
line-height: 61px;
`