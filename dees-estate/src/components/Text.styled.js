import styled from 'styled-components'

export const Heading = styled.h1`
font-weight: 500;
font-size: 64px;
line-height: 82px;
color:${({color})=> color ? color : 'inherit'};
`
export const SubHeading = styled.h2`
`
export const Text = styled.p`
font-weight: 400;
font-size: 32px;
line-height: 41px;
`
export const SpanText = styled.span`
`