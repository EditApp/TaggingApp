import React, { FC, ReactNode, useRef, useContext } from 'react'
import styled from 'styled-components'

import { colors } from '../../appSettings/stylesSettings'


const RectStyled = styled.g<SvgPlaygroundStyles>`  
`

const ComputeRect: FC<IRect> = ({ 
  id,
  rectX,
  rectY,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  textX,
  textY,
  textLabel
 }) => {
  //const rectRef = useRef(null);
   //todo perf
  //console.log("rectRef", rectRef?.current)
  return <RectStyled id={id}>
    <rect 
    //ref={rectRef} 
        x={rectX} y={rectY} 
        width={width} 
        height={height} fill={fill} 
        stroke={stroke} 
        strokeOpacity={'70%'}
        strokeWidth={strokeWidth} 
      />
      <text 
        x={rectX - 5} y={rectY - 5} 
        fontFamily="Verdana" 
        fontSize="0,9rem" 
        fill={colors.blue}
       >{textLabel}
      </text>
  </RectStyled>
}

export default ComputeRect