import styled from 'styled-components'
import {Section, Container, Button, Icon} from './Reusable.styled';
import {Title, Text} from  './Text.styled';
import {Arrow_Down, Search as search_icon} from '../assets/index'


export default function Search( ){
 return(
     <Wrapper flex Justify="space-between" Align="center">
        <Container fit padding="1em">
            <Title primary>Location{" "}<Icon image={Arrow_Down}/></Title>
            <Text>Lekki</Text>
        </Container>
        <Container fit padding="1em">
            <Title primary>Property Type{" "}<Icon image={Arrow_Down}/></Title>
            <Text>Duplex</Text>
        </Container>
        <Container fit padding="1em">
            <Title primary>Max Price{" "}<Icon image={Arrow_Down}/></Title>
            <Text>$10,000</Text>
        </Container>
        <Button><Icon image={search_icon}/>{" "}Search</Button>
     </Wrapper>
 )
}

const Wrapper = styled(Section)`
margin:1em auto;
padding: 1em 3em;
background: #FFFFFF;
box-shadow: 24px 24px 48px rgba(37, 73, 211, 0.05);
border-radius: 28px;
max-width:1295px;;
`
