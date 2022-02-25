import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface LayoutStyles {
}

export const LayoutStyled = styled.section<LayoutStyles>`
  display: flex;
`

interface ILayout {
  children: ReactNode
  className?: string
}

const Layout: FC<ILayout> = ({ children, className }) =>
  <LayoutStyled
    className={`Layout ${className}`}
  >
    {children}
  </LayoutStyled>

export default Layout
