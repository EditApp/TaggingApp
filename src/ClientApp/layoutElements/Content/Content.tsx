import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ContentStyles {
}

export const ContentStyled = styled.section<ContentStyles>`
  width: 100%;
`

interface IContent {
  children: ReactNode
  className?: string
}

const Content: FC<IContent> = ({ children, className }) =>
  <ContentStyled
    className={`content ${className}`}
  >
    {children}
  </ContentStyled>

export default Content
