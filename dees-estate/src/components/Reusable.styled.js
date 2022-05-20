import styled from "styled-components";

//Container
export const Container = styled.div`
  position: relative;
  width:100%;
  margin:0;
  padding:${({padding})=>padding ? padding: '1em 3em'};
  order:${({order})=>order};
  display:${({grid, flex})=> grid ? 'grid' : flex ? 'flex' : 'block'};
    
  //for grid
  gap: ${({gap})=> gap ? gap :''};
  grid-template-columns: ${({GTC})=>GTC ? GTC : '' };

  align-items:${({Align})=> Align ? Align : ''};
  justify-content:${({Justify})=> Justify ? Justify : ''};

  //for flex
  flex-direction:${({col})=> col ? 'column' : ''};


   /* @media (max-width:720px){
    grid-template-columns:1fr;
 
   } */

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
max-width:182px;
max-height:67px;
`