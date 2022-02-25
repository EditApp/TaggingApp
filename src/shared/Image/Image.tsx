import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'

interface ImageStyles {
  height?: strig
  withBorder?: boolean
  opacity?: boolean
}

const ImageBox = styled.div<ImageStyles>`
`

export const ImageStyled = styled.img<ImageStyles>`
  border: ${props => props.withBorder ? `5px solid ${colors.grayClear}` : '0px solid transparent'} ;
  margin: 20px auto;
  display: block;
  height: ${props => props.height};
  opacity: ${props => props.opacity};
`
interface IImage {
  children?: ReactNode
  className?: string
  src?: string
  height?: strig
  opacity?: strig
  withBorder?: boolean
}

const Image: FC<IImage> = ({ children, height, opacity, src, withBorder, className }) =>
  <ImageBox
    className={`image ${className}`}
  >
    <ImageStyled height={height} withBorder={withBorder} src={src} opacity={opacity}/>
    {children}
  </ImageBox>

export default Image
