import styled from 'styled-components'

export const Heading = styled.h1`
font-weight: 500;
font-size: 64px;
line-height: 82px;
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
const Paragraph = styled.p`
font-family: ${({FTN2})=> FTN2 ? `'Nunito',sans-serif`: `'Space Grotesk', sans-serif`};
margin:${({margin})=>margin ? margin: '0'};
text-transform:${({uppercase})=>uppercase ? 'uppercase': null};
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
opacity:${({blur})=> blur ? '0.7' : null};
`

export const SubHeading = styled(Paragraph)`
font-weight: ${({bold})=> bold ? '700' : '500'};//500;
font-size: ${({size})=> size ? size : '36px'};
`

export const Title = styled(Paragraph)`
font-weight:700;
font-size: 24px;
line-height: 31px;
`
export const Text = styled(Paragraph)`
font-weight:${({bold})=> bold ? '500' : '400'};
font-style: normal;
font-size: ${({large})=> large ? '32px' : '24px'};
line-height: ${({large,height})=> large ? '41px' : height ? height : '31px'};
`

export const SmallText = styled(Paragraph)`
font-weight: ${({bold})=> bold ? '600' : '400'};
font-size: ${({size})=> size ? size : '18.6868px'};
line-height: ${({size})=> size ? '29px' : '25px'};
`
export const SpanText = styled.span`
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`

