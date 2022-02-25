import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Content, Layout, Menu }  from '../layoutElements'

interface AppLayoutStyles {
}

export const AppLayoutStyled = styled.section<AppLayoutStyles>`
  border: 2px solid green;
`

interface IAppLayout {
  children: ReactNode
  className?: string
}

const AppLayout: FC<IAppLayout> = ({ children, className }) =>
  <AppLayoutStyled
    className={`appLayout ${className}`}
  >
    <Layout>
    {/*<Menu></Menu>*/}
      <Content>
        {children}
      </Content>
    </Layout>
  </AppLayoutStyled>

export default AppLayout
