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
  minHeight?: string
  flex?: boolean
  injectedStyles?: any
}

export const BoxStyled = styled.div<BoxStyles>`
  position: relative;
  min-width: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${props => props.flex ? "flex" : "block"};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.bgColor};
  background-image: ${props => props.bgImage};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  overflow:hidden;
  ${props => props.injectedStyles};
`

interface IBox {
  children: ReactNode
  padding?: string
  margin?: string
  borderRadius?: string
  bgColor?: string
  bgImage?: string
  height?: string
  minHeight?: string
  width?: string
  flex?: boolean
  maxWidth?: string
  injectedStyles?: any
  className?: string
}

const Box: FC<IBox> = ({ children, padding, margin, bgColor, bgImage, borderRadius, height, minHeight, width, flex, maxWidth, injectedStyles, className }) =>
  <BoxStyled
    padding={padding}
    margin={margin}
    bgColor={bgColor}
    bgImage={bgImage}
    borderRadius={borderRadius}
    height={height}
    minHeight={minHeight}
    width={width}
    flex={flex}
    maxWidth={maxWidth}
    injectedStyles={injectedStyles}
    className={`box ${className}`}
  >
    {children}
  </BoxStyled>

export default Box
