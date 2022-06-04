import styled from 'styled-components'
import { Container, Logo} from './Reusable.styled'
import {SubHeading , Text} from './Text.styled'
// import logo from '../assets/logo.png'
// import {Logo} from './Navbar'

const footer_links = [
    {
        heading:"Property",
        links:['Learning module','Partnership','Watch demo', 'Event'],
    },
    {
        heading:"About",
        links:['Our Company','Career','Investor Relations', 'Social Impact'],
    },
    {
        heading:"Resources",
        links:['Contact','Give feedback','System status', 'Privacy Policy'],
    }
]

export default function Footer() {
  return (
    <FooterContainer>
        <Wrapper grid gap="5px">
            <Link> <Logo white>Dee's Estate</Logo> </Link>
            <Text FTN2 height="33px">
                Solution for easy and flexible house hunting.
                You can trust us anywhere through this platform 
            </Text>
        </Wrapper>
        <LinkWrapper flex>
            {footer_links.map((section,index)=>{
                return(
                    <Container grid gap="1em" width="fit-content" padding="0" key={`${section.heading}-${index}`}>
                        <SubHeading bold>{section.heading}</SubHeading>
                        <Container grid gap="0.5em" padding="0">
                            {section.links.map((link,link_index)=>{
                                return(
                                    <Link FTN2 key={`${index}${link_index}`}>{link}</Link>
                                )
                            })}
                            
                        </Container>
                    </Container>
                )
            })}
        </LinkWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
position: relative;
width:100%;
margin:0;
padding:5em 2em;
display:flex;
align-items:flex-start;
justify-content:flex-start;
background:#0F298B;
color:#FFFFFF;
height:100%;
min-height: 607px;
flex-wrap:wrap;
gap:4em 8em;

@media (min-width:720px){
    padding:6em 4em;
    }
`

const Wrapper = styled(Container)`
width: 331px;
padding:0;
`
const LinkWrapper = styled(Container)`
padding:0;
align-items:flex-start;
justify-content:flex-start;
flex-wrap:wrap;
max-width:912px;
width:fit-content;
gap:4em;
`

const Link = styled.a`
font-family: ${({FTN2})=> FTN2 ? `'Nunito',sans-serif`: `'Space Grotesk', sans-serif`};
margin:0;
color:#FFFFFF;
opacity:0.8;
line-height: 33px;
&:hover{
    text-decoration:underline;
    transform:scale(1.02);
}
`
