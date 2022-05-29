import styled from 'styled-components'
import {Section, Container, Button, Icon} from './Reusable.styled';
import {Title, Text} from  './Text.styled';
import {Arrow_Down, Search as search_icon} from '../assets/index'


export default function Search( ){
 return(
     <Wrapper className="search" flex>
        <Container padding="1em">
            <Title primary>Location{" "}<Icon image={Arrow_Down}/></Title>
            <Text>Lekki</Text>
        </Container>
        <Container padding="1em">
            <Title primary>Property Type{" "}<Icon image={Arrow_Down}/></Title>
            <Text>Duplex</Text>
        </Container>
        <Container padding="1em">
            <Title primary>Max Price{" "}<Icon image={Arrow_Down}/></Title>
            <Text>$10,000</Text>
        </Container>
        <Button><Icon image={search_icon}/>{" "}Search</Button>
     </Wrapper>
 )
}

const Wrapper = styled(Section)`
margin:1em auto;
padding: 1em 2vmax;
background: #FFFFFF;
box-shadow: 24px 24px 48px rgba(37, 73, 211, 0.05);
border-radius: 28px;
flex-direction:column;
width:80%;
justify-content:flex-start;
align-items:flex-start;
gap:.4vmax;

& ${Button}{
margin:1em;
}
& ${Container}{
    width:100%;

    p{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

}

@media screen and (min-width:768px){
    width:90%;
    padding: 1em 3em;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    gap:1vmax;
    max-width:1295px;
    
    & ${Button}{
        margin:0;
    }

    & ${Container}{
        padding:1em 0;
        width:fit-content;
        p{
            display:block
        }
    }
    
}
`
