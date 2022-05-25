import styled from 'styled-components'


export const clamp = (value) =>{
    // font-size: clamp([min]rem, [v]vw + [r]rem, [max]rem);
    value = parseFloat(value)
    let minmax = value <= 16 ? 16 
    : value <= 24 ? (value/4) + 8 : (value/2) + 16;

    if(value === 16) return '16px'

    let min = value < minmax ? value : minmax;
    let max = value < minmax ? minmax : value ;
        
    let min_rem = (min/16).toFixed(0)
    let max_rem = (max/16).toFixed(0)
    
    if(min_rem === max_rem)min_rem-=1
    if(min_rem <= 0)min_rem = 1
    const vw = ((100 * (max - min)) / 960).toFixed(2);
    const rem = (((768 * max) - (1728 * min)) / -960).toFixed(2);
    const clamp = `clamp(${min_rem}rem ,${vw}vw + ${(rem/16)}rem, ${max_rem}rem)`
    
    return clamp;
}


export const Heading = styled.h1`
font-weight: 500;
font-size: 64px;
font-size:${clamp(64)};
line-height:1.2;
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
font-size: ${({size})=> size ? `${size}px`: `36px`};
font-size: ${({size})=> size ? `${clamp(size)}`: `${clamp(36)}`};
`

export const Title = styled(Paragraph)`
font-weight:700;
font-size: 24px;
font-size: ${clamp(24)};
line-height: 31px;
`
export const Text = styled(Paragraph)`
font-weight:${({bold})=> bold ? '500' : '400'};
font-style: normal;
font-size: ${({large})=> large ? '32px' : '24px'};
font-size: ${({large})=> large ? `${clamp(32)}`: `${clamp(24)}`};
line-height: ${({large,height})=> large ? '41px' : height ? height : '31px'};
`

export const SmallText = styled(Paragraph)`
font-weight: ${({bold})=> bold ? '600' : '400'};
font-size: ${({size})=> size ? `${size}px` : '18.6868px'};
font-size: ${({size})=> size ? `${clamp(size)}`: `${clamp(18.6868)}`};
line-height: ${({size})=> size ? `${clamp(29)}`: `${clamp(25)}`};
`
export const SpanText = styled.span`
color:${({primary})=> primary ? '#0F298B' : 'inherit'};
`

