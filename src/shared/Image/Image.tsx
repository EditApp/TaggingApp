import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'

interface ImageStyles {
  height?: strig
  width?: strig
  maxHeight?: strig
  maxWidth?: strig
  withBorder?: boolean
  opacity?: boolean
}

const ImageBox = styled.div<ImageStyles>`
  padding : 20px;
  margin : 20px;
`

export const ImageStyled = styled.img<ImageStyles>`
  border: ${props => props.withBorder ? `5px solid ${colors.grayClear}` : '0px solid transparent'} ;
  margin: 20px auto;
  display: block;
  max-width: ${props => props.maxWidth ?? "100%"};
  max-height: ${props => props.maxHeight ?? "400px"};
  width: ${props => props.width ?? "auto"};
  height: ${props => props.height ?? "auto"};
  opacity: ${props => props.opacity};
`
interface IImage {
  children?: ReactNode
  className?: string
  src?: string
  height?: strig
  width?: strig
  maxHeight?: strig
  maxWidth?: strig
  opacity?: strig
  withBorder?: boolean
}

const Image: FC<IImage> = ({ children, height, width, maxWidth, maxHeight, opacity, src, withBorder, className }) =>
  <ImageBox
    className={`image ${className}`}
  >
    <ImageStyled height={height} width={width} maxWidth={maxWidth} maxHeight={maxHeight} withBorder={withBorder} src={src} opacity={opacity}/>
    {children}
  </ImageBox>

export default Image
