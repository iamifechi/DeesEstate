import React, {useState,useEffect} from 'react';
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
    const [toggle,setToggle] = useState(false);
    const [width,setWidth] = useState(0);

    useEffect(()=>{
        
        let widthOnLoad = window.innerWidth;
        setWidth(widthOnLoad)
        window.onresize=()=>{
            let width = window.innerWidth;
            setWidth(width);
            if(width>980){
                console.log(width)
                setToggle(false)
              
            }
        };
    },[]);
  return (
    <Nav flex Justify="space-between"  Align="center">
        <Link><Logo/></Link>
        <Container 
            fit 
            padding = "0" 
            className = {toggle ? 'toggle navlinks' : 'navlinks'}
            grid GTC={`repeat(${navlinks.length}, 1fr) 2fr`}
            Align="center">
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
            <Button>Get Started</Button>
           
        </Container> 
        <Toggle isVisible={width} 
        className={toggle ? "open" : "close"}
        onClick = {()=> toggle ? setToggle(false):setToggle(true)}>
                <Bars className="bars"></Bars>
                <Bars className="bars"></Bars>
                <Bars className="bars"></Bars>
        </Toggle>
    
    </Nav>
  )
}
const Nav = styled.nav`
text-align:center;
border-bottom: 1px solid #C4C4C4;
padding:1em 8%;
position: relative;
width:100%;
margin:0;
display:flex;
align-items:center;
justify-content:space-between;



    & a:hover{
        text-decoration:underline;
    }
    @media screen and (min-width:768px){
        padding:1em 7%;

        & ${Button}{
            justify-self:flex-end;
        }
    }
    @media screen and (max-width:980px){
        
        & .navlinks{
           display:none;
        }
        & .toggle.navlinks{
         position:absolute;
         height:100vh;
         width:100%;
         z-index:9999;
         background:white;
         top:5em;
         left:0;
         display:flex;
         flex-direction:column;
         align-items:center;
         gap:0.8em;
         padding:1em;
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
    transform:scale(1.02);
}
`

const Toggle = styled.button`
display:block;
top:2vh;
height:fit-content;
padding:10px;
padding:1em;
z-index:99;
border:none;
position:absolute;
right:5%;
background:transparent;


:hover{
    /* background:white; */
    cursor:pointer;
    transform:scale(1.08);
}

:focus{
    outline:none;
}

&.open{
    .bars:first-child{
        transform:translateY(9px) rotate(45deg);
        }
    .bars:last-child{
        transform:translateY(-6px) rotate(-45deg);
    } 
    
    .bars:nth-child(2){
        visibility:hidden;
    }
    .bars:nth-child(2)::after{
    color:black;
    content:"close";
    visibility:visible;
    }
}

@media only screen and (min-width:980px){
    display:none;
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
    left:0vw;
    color:white;
    height:20px;
    width:50px;
    display:none;
}
`