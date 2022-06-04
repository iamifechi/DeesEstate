import styled from "styled-components";
import {White, Black} from '../assets/index'
//import {clamp} from './Text.styled'

//Container
export const Section = styled.section`
  position: relative;
  width:100%;
  margin:1em auto;
  padding:${({padding})=>padding ? padding : '5em'};
  order:${({order})=>order};
  display:${({grid, flex})=> grid ? 'grid' : flex ? 'flex' : 'block'};
    
  //for grid
  grid-template-columns: ${({GTC})=>GTC ? GTC : null };

  //for flex
  flex-direction:${({column})=> column ? 'column' : null};

  align-items:${({Align})=> Align ? Align : null};
  justify-content:${({Justify})=> Justify ? Justify : null};

  &.hero{
    align-items:center;
  }


  @media screen and (max-width:768px){
    gap: 2em;
  }
  @media screen and (min-width:768px){
    gap: ${({gap})=> gap ? gap :null};
  }
   
   @media (max-width:768px){
     &.hero, &.about{
      padding:3em 2em;
      flex-direction:column-reverse;
     }

     &.about{
       align-items:center;
       text-align:center;
     }
   
   }

`
export const Container = styled.div`
  position: relative;
  width:${({fit,width})=> fit ? 'fit-content' : "" || width || '100%'};;
  margin:${({margin})=>margin ? margin: '0'};
  padding:${({padding})=>padding ? padding: '1em 3em'};
  order:${({order})=>order};
  display:${({grid, flex})=> grid ? 'grid' : flex ? 'flex' : 'block'};
    
  //for grid
  gap: ${({gap})=> gap ? gap :null};
  grid-template-columns: ${({GTC})=>GTC ? GTC : null };

  //for flex
  flex-direction:${({column})=> column ? 'column' : null};

  align-items:${({Align})=> Align ? Align : null};
  justify-content:${({Justify})=> Justify ? Justify : null};

  &.card_text{
      justify-items:center;
    }

    //for cards wrapper/container
    &.card_container{
      flex-wrap: wrap;
      gap: 2em;
      justify-content:center;
      justify-items:${({center})=> center ? 'center' : null};
      padding:1em 0;
      align-items:center;

      @media screen and (min-width:768px){
        padding:1em;
        gap:5em;
        justify-content:center;

      }
    }

   
`
export const Card = styled(Container)`
background: #FFFFFF;
border-radius: 18.6868px;
padding:18.6868px ;
align-items: flex-start;
height:fit-content;
margin:0;

&:hover{
    box-shadow: 24px 24px 48px rgba(0, 0, 0, 0.05);
}

`
export const TextWrapper = styled(Container)`
padding:0;
justify-content:space-evenly;
align-items:flex-start;
max-width:640px;

@media screen and (min-width:768px){
padding:1em;
}
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
font-size: 100%;
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
background: ${({white})=> white ? `url(${White}) no-repeat` : `url(${Black}) no-repeat`};
background-size: contain;
background-position: center;
font-family: 'Oleo Script';
font-style: normal;
font-weight: 400;
font-size: calc(36/0.24 + 0px);
line-height: 50px;
color: ${({white})=> white ? '#FFFFFF' : '#000000'};
text-indent:-9999px;

`