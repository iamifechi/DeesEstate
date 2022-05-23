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
            <Link> <Logo white/> </Link>
            <Text FTN2 height="33px">
                Solution for easy and flexible house hunting.
                You can trust us anywhere through this platform 
            </Text>
        </Wrapper>
        <LinkWrapper flex >
            {footer_links.map((section,index)=>{
                return(
                    <Container grid gap="38px" padding="0" key={`${section.heading}-${index}`}>
                        <SubHeading bold>{section.heading}</SubHeading>
                        <Container grid gap="19px" padding="0">
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
padding:6em;
display:flex;
align-items:flex-start;
justify-content:space-between;
background:#0F298B;
color:#FFFFFF;
height:400px;
min-height: 607px;
`

const Wrapper = styled(Container)`
width: 331px;
padding:0;
`
const LinkWrapper = styled(Container)`
padding:0;
align-items:flex-start;
justify-content:space-between;
max-width:912px;
`

const Link = styled.a`
font-family: ${({FTN2})=> FTN2 ? `'Nunito',sans-serif`: `'Space Grotesk', sans-serif`};
margin:0;
color:#FFFFFF;
/* font-weight: 400;
font-size:24px; */
opacity:0.8;
line-height: 33px;
&:hover{
    text-decoration:underline;
    transform:scale(1.02);
}
`
