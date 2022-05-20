import styled from 'styled-components'
//import { Link, NavLink } from 'react-router-dom'
import { Container, Button } from './Reusable.styled'
import logo from '../assets/logo.png'
const navlinks = [
    {title: "Home", route:'/'},
    {title: "Rent", route:'/'},
    {title: "Land", route:'/'},
    {title: "Agent", route:'/'},
    {title: "Contact Us", route:'/'}
]

export default function Navbar() {
  return (
    <Container flex Justify="space-between" Align="center">
        <Logo>Dee's Estate</Logo>
        <Nav size={navlinks.length}>
            {navlinks.map((link, index)=>{
                return(
                    <a href={link.title} 
                        key={`${link.title}-${index}`}
                        >
                        {link.title}
                    </a>
                )
            })}
        </Nav>
        <Button>Get Started</Button>
    </Container>
  )
}
const Nav = styled.nav`
display:grid;
grid-template-columns:${({size})=> `repeat(${size}, 1fr)`};
gap:5px;
justify-content:space-between;
align-items:center;
text-align:center;

    & a:hover{
        text-decoration:underline;
    }
`
const Logo = styled.div`
background:url(${logo}) no-repeat white;
background-size:contain;
background-position:center;
width: 165px;
height: 50px;
text-indent:-9999px;
`