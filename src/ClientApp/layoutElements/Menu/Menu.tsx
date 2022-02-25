import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface MenuStyles {}
//just for exmple of menu aside
export const MenuStyled = styled.aside<MenuStyles>`
  max-width: 100px;
  width: 100%;
  height: 800px;
`
interface IMenu {
  children: ReactNode
  className?: string
}

const Menu: FC<IMenu> = ({ children, className }) =>
  <MenuStyled
    className={`Menu ${className}`}
  >
    {children}
  </MenuStyled>

export default Menu
