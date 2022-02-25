import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ComponentStyles {}

export const ComponentStyled = styled.section<ComponentStyles>`
  
`
interface IComponent {
  children: ReactNode
  className?: string
}

const Component: FC<IComponent> = ({ children,className }) =>
  <ComponentStyled
    className={`component ${className}`}
  >
    {children}
  </ComponentStyled>

export default Component
