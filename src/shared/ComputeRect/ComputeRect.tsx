import React, { FC, ReactNode, useRef, useContext } from 'react'
import styled from 'styled-components'

import { colors } from '../../appSettings/stylesSettings'

const RectStyled = styled.g<SvgPlaygroundStyles>`  
`
interface IRect {
  id: string
  rectX? :string
  rectY? : string
  width? : any
  height? : any
  fill? : string
  stroke? : string
  strokeWidth?: number
  textX? :any
  textY? :any
  textLabel?:string
}

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
  return <RectStyled id={id}>
    <rect 
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
    >
      {textLabel}
    </text>
  </RectStyled>
}

export default ComputeRect