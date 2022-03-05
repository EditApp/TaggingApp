import React, { FC, ReactNode, useRef, useContext } from 'react'
import styled from 'styled-components'

import { colors } from '../../appSettings/stylesSettings'

interface IRectStyled {
  rectX?: number
  rectY?: number
  width?: any
  height?: any
  fill?: string
  stroke?: string
  strokeWidth?: number
}

const RectStyled = styled.g<IRectStyled>`  
`
interface IRect {
  id: string
  rectX?: any
  rectY?: any
  width?: string
  height?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  textX?: string
  textY?: string
  textLabel?: string
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
      x={String(rectX - 5)} y={String(rectY - 5)}
      fontFamily="Verdana"
      fontSize="0,9rem"
      fill={colors.blue}
    >
      {textLabel}
    </text>
  </RectStyled>
}

export default ComputeRect