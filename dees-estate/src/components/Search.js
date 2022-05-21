import styled from 'styled-components'
import {Section, Container, Button} from './Reusable.styled';
import {Title, Text} from  './Text.styled';


export default function Search( ){
 return(
     <Wrapper flex Justify="space-evenly" Align="center">
        <Container>
            <Title primary>Location</Title>
            <Text>Lekki</Text>
        </Container>
        <Container>
            <Title primary>Property Type</Title>
            <Text>Duplex</Text>
        </Container>
        <Container>
            <Title primary>Max Price</Title>
            <Text>$10,000</Text>
        </Container>
        <Button>Search</Button>
     </Wrapper>
 )
}

const Wrapper = styled(Section)`
margin:1em auto;
padding: 1em;
background: #FFFFFF;
box-shadow: 24px 24px 48px rgba(37, 73, 211, 0.05);
border-radius: 28px;
max-width:1295px;;
`
