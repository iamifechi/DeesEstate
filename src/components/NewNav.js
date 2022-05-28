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

export default function NewNav({handleToggle,toggle}){
    return(
        <Nav id="topnav">
         {/* <header id="brand-logo">
            <img src={logo} alt="ear1 Logo" />
         </header> */}
        <Link> <Logo/> </Link>

        <NavLinks id="nav" className={toggle?"toggle":""}>

          {navlinks.map((link, index)=>{
            return(
                <li key={`${link.title}-${index}`}>
                    <Link 
                    href={`#${link.title}`} 
                    active = {index === 0 ? true : false} 
                    onClick={handleToggle}> 
                        {link.title} 
                    </Link>
                </li>
            )
        })}

        <Button end> Get Started </Button>

          <Toggle id="toggle-btn" onClick={handleToggle} 
              className={toggle?"close":"open"}>
            <Bars className="bars"></Bars>
            <Bars className="bars"></Bars>
            <Bars className="bars"></Bars>
          </Toggle>
        </NavLinks>
      </Nav>
    )
}

const Nav = styled.nav`
text-align:center;
border-bottom: 1px solid #C4C4C4;
padding:1em 2em;
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
const NavLinks = styled.ul`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
gap:1em;
width:100%;
list-style:none;
padding:5em 1em;
//background:crimson; 
li{
    display:flex;
    width:fit-content;
    &:hover{
        transform:scale(1.15);
    }
}
`
const Link = styled.a`
margin:0;
color:${({active})=> active ? "#2549D3" : '#000000'};
font-weight:${({active})=> active ? "500" : '400'};;
line-height: 33px;

&:hover{
    text-decoration:underline;
}
`

const Toggle = styled.div`
position:absolute;
display:block;
top:4vh;
right:5%;
//left:75%;
width:fit-content;
height:fit-content;
padding:10px;
z-index:99;

&:hover{
    cursor:pointer;

    &.bars:nth-child(2)::after{
        display:flex;
    }
}
`
const Bars = styled.span`
position:relative;
height:3px;
width:30px;
background:black;
margin:4px auto;
display:block;
transition:background 0.1s ease, visibility 0.1s ease, transform 0.5s ease-in-out;

&:nth-child(2)::after{
    content:"Menu";
    font-size:12px;
    position:absolute;
    top:4vh;
    top:0;
    left:0vw;
    color:black;
    height:20px;
    width:50px;
    display:none;
}
`

export const NavBar = styled(Container)`
/* border-bottom: 1px solid #C4C4C4;
padding:"1em 6em"; */
`