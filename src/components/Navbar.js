import styled from 'styled-components'
import { Logo, Container, Button } from './Reusable.styled'
// import logo from '../assets/logo.png'
const navlinks = [
    {title: "Home", route:'/'},
    {title: "Rent", route:'/'},
    {title: "Land", route:'/'},
    {title: "Agent", route:'/'},
    {title: "Contact Us", route:'/'}
]

export default function Navbar() {
  return (
    <Nav flex Justify="space-between"  Align="center">
        <Link><Logo/></Link>
        <Container 
            fit 
            padding = "0" 
            gap = "5px" 
            grid GTC={`repeat(${navlinks.length}, 1fr)`}>
            {navlinks.map((link, index)=>{
                return(
                    <Link href={link.title} 
                        active = {index === 0 ? true : false}
                        key={`${link.title}-${index}`}
                        >
                        {link.title}
                    </Link>
                )
            })}
        </Container>
        <Button>Get Started</Button>
    </Nav>
  )
}
const Nav = styled.nav`
text-align:center;
border-bottom: 1px solid #C4C4C4;
padding:1em 6em;
position: relative;
width:100%;
margin:0;
display:flex;
align-items:center;
justify-content:space-between;



    & a:hover{
        text-decoration:underline;
    }
`
const Link = styled.a`
margin:0;
color:${({active})=> active ? "#2549D3" : '#000000'};
font-weight:${({active})=> active ? "500" : '400'};;
line-height: 33px;

&:hover{
    text-decoration:underline;
    transform:scale(1.02);
}
`

export const NavBar = styled(Container)`
border-bottom: 1px solid #C4C4C4;
padding:"1em 6em";
`