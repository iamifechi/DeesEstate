import styled from 'styled-components'
import { Section, Container, Button} from './Reusable.styled'
import {Heading , Text} from './Text.styled'
import {Hero as heroImage} from '../assets/index'
import {Play} from '../assets/index'

export default function Hero() {
  return (
    <Section
      flex
      padding="4em 3em"
      Justify="space-evenly"
      className="hero"
      gap="2em"
    >
      <TextWrapper flex column>
        <Container grid className='text-content' gap="1em" padding="0">
          <Heading primary>
            Helping you find the property of your dreams.
          </Heading>
          <Text large>
            Creating quality urban lifestyles, building stronger communities
          </Text>
        </Container>

        <Container flex padding="0" Align="center"> 
          <Button shadow>Learn More</Button>
          <PlayButton/>
        </Container>
        

      </TextWrapper>
      <ImageWrapper/>
    </Section>
  )
}

const TextWrapper = styled(Container)`
padding:0;
justify-content:space-between;
align-items:flex-start;
max-width:640px;
gap:2em;
  /* h1{
      font-size:48px;
    } */

@media screen and (min-width:768px){
    gap:1em;
    padding:0;

    & ${Container}.text-content{
        gap:1em;
        /* h1{
          font-size:64px;
        } */
      }
}


`

const PlayButton = styled.div`
background:url(${Play}) no-repeat #0F298B;
background-position:15px center;
width: 50px;
height: 50px;
border-radius:50%;
margin:0 50px;
`

const ImageWrapper = styled.div`
background:url(${heroImage}) no-repeat;
background-size:contain;
background-position:center;
width:100%;
max-width:736px;
height:32vmax;
min-height:235px;
max-height:511px;
position:relative;

@media screen and(min-width:999px){
  height:511px;
}

  &::before{
  content:"";
  position: absolute;
  width: 80px;
  height: 80px;
  left: 0;
  bottom: 0;
  background: #2549D3;
  box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.25);
  z-index:5;
  border-radius:50%;
  }
`