import styled from "styled-components";
//import {White, Black} from '../assets/index'

//Container
export const Section = styled.section`
  position: relative;
  width:100%;
  margin:1em 0;
  padding:${({padding})=>padding ? padding : '5em'};
  order:${({order})=>order};
  display:${({grid, flex})=> grid ? 'grid' : flex ? 'flex' : 'block'};
    
  //for grid
  gap: ${({gap})=> gap ? gap :''};
  grid-template-columns: ${({GTC})=>GTC ? GTC : '' };

  //for flex
  flex-direction:${({column})=> column ? 'column' : ''};

  align-items:${({Align})=> Align ? Align : ''};
  justify-content:${({Justify})=> Justify ? Justify : ''};


   /* @media (max-width:720px){
    grid-template-columns:1fr;
 
   } */

`
export const Container = styled.div`
  position: relative;
  width:${({fit})=>fit ? 'fit-content': '100%'};;
  margin:${({margin})=>margin ? margin: '0'};
  padding:${({padding})=>padding ? padding: '1em 3em'};
  order:${({order})=>order};
  display:${({grid, flex})=> grid ? 'grid' : flex ? 'flex' : 'block'};
    
  //for grid
  gap: ${({gap})=> gap ? gap :''};
  grid-template-columns: ${({GTC})=>GTC ? GTC : '' };

  //for flex
  flex-direction:${({column})=> column ? 'column' : ''};

  align-items:${({Align})=> Align ? Align : ''};
  justify-content:${({Justify})=> Justify ? Justify : ''};


   /* @media (max-width:720px){
    grid-template-columns:1fr;
 
   } */

`
export const Card = styled(Container)`
background: #FFFFFF;
border-radius: 18.6868px;
padding:18.6868px ;
align-items: flex-start;

&:hover{
    box-shadow: 24px 24px 48px rgba(0, 0, 0, 0.05);
}
`
export const TextWrapper = styled(Container)`
padding:0;
justify-content:space-evenly;
align-items:flex-start;
max-width:640px;
`
//Button
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0.8em 1.2em;
background: #2549D3;
border: none;
border-radius: 10px;
font-size: 24px;
font-weight:700;
color:white;
width:fit-content;
justify-self: ${({end})=> end ? 'flex-end' : null};
box-shadow:${({shadow})=>shadow ? "24px 24px 48px rgba(0, 0, 0, 0.1);" : null};
&:hover{
  cursor:pointer;
  transform:scale(1.02);
  box-shadow:${({shadow})=>shadow ? "24px 24px 48px rgba(0, 0, 0, 0.1);" : null};
}
`

export const Image = styled.img`
font-weight:400;
font-size:9px;
margin:${({icon})=>icon ? "0 15px 0 0": '0'};
`
export function Icon({image}){
return (
<Image icon margin src={image} alt={'icon'}/>
)
}

export const Logo = styled.header`
width: 165px;
height: 50px;
position:relative;

&::after{
content:"Dee's Estate";
position:absolute;
top:0;
left:0;
font-family: 'Oleo Script';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 50px;
color: ${({white})=> white ? '#FFFFF' : '#000000'};
}
`
