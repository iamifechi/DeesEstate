import styled from 'styled-components'

export const Heading = styled.h1`
font-weight: 500;
font-size: 64px;
line-height: 82px;
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
export const SubHeading = styled.p`
font-weight: 500;
font-size: ${({size})=> size ? size : '36px'};
line-height: ${({size})=> size ? '41px' : '46px'};
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
export const Title = styled.p`
font-weight:700;
font-size: 24px;
line-height: 31px;
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
export const Text = styled.p`
font-weight: 400;
font-size: ${({large})=> large ? '32px' : '24px'};
line-height: ${({large})=> large ? '41px' : '31px'};
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`
export const SpanText = styled.span`
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`