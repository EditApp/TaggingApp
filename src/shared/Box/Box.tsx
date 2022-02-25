import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface BoxStyles {
  padding?: string
  margin?: string
  borderRadius?: string
  bgColor?: string
  bgImage?: string
  height?: string
  width?: string
  maxWidth?: string
  mini?: boolean
}

export const BoxStyled = styled.div<BoxStyles>`
  position: relative;
  border: 1px solid red;
  min-width: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${props => props.padding};
  margin: ${props =>  props.margin};
  border-radius: ${props =>  props.borderRadius};
  background-color: ${props => props.bgColor};
  background-image: ${props => props.bgImage};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
`

interface IBox {
  children: ReactNode
  padding?: string
  margin?: string
  bgColor?: string
  bgImage?: string
  height?: string
  minHeight?: strig
  width?: string
  maxWidth?: string
  className?: string
}

const Box: FC<IBox> = ({ children,  padding, margin,  bgColor,  bgImage, borderRadius,  height,  minHeight, width,  maxWidth,  className }) =>
  <BoxStyled
    padding={padding}
    margin={margin}
    bgColor={bgColor}
    bgImage={bgImage}
    borderRadius={borderRadius}
    height={height}
    minHeight={minHeight}
    width={width}
    maxWidth={maxWidth}
    className={`box ${className}`}
  >
    {children}
  </BoxStyled>

export default Box
