import styled from 'styled-components'

export const Heading = styled.h1`
font-weight: 500;
font-size: 64px;
line-height: 82px;
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
const Paragraph = styled.p`
 margin:${({margin})=>margin ? margin: '0'};
 text-transform:${({uppercase})=>uppercase ? 'uppercase': ''};
 color:${({primary})=> primary ? '#0F298B' : 'inherit'};
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
font-weight: 400;
font-size: ${({large})=> large ? '32px' : '24px'};
line-height: ${({large})=> large ? '41px' : '31px'};
`
export const SmallText = styled(Paragraph)`
font-weight: 400;
font-size: 19px;
line-height: 24px;
`
export const SpanText = styled.span`
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`