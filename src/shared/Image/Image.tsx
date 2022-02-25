import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ImageStyles {
  height?: strig
}

const ImageStyled = styled.div<ImageStyles>`
`

const Img = styled.img<ImageStyles>`
  height: ${props => props.height};
`
interface IImage {
  children?: ReactNode
  className?: string
  src?: string
  height?: strig
}

const Image: FC<IImage> = ({ children, height, src, className }) =>
  <ImageStyled
    className={`image ${className}`}
  >
    <Img height={height} src={src}/>
    {children}
  </ImageStyled>

export default Image
