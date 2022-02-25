import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Content, Layout, Menu }  from '../layoutElements'
import { Image , ImageStyled}  from '../../shared'
import BgImg from '../../assets/mountains.jpeg'

interface AppLayoutStyles {
}

export const AppLayoutStyled = styled.section<AppLayoutStyles>`
  border: 2px solid red;
  position: relative;
  ${ImageStyled} {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`

interface IAppLayout {
  children: ReactNode
  className?: string
}

const AppLayout: FC<IAppLayout> = ({ children, className }) =>
  <AppLayoutStyled
    className={`appLayout ${className}`}
  >
   <Image src={BgImg} opacity="0.2">
    <Layout>
    {/*<Menu></Menu>*/}
      <Content>
        {children}
      </Content>
    </Layout>
  </AppLayoutStyled>

export default AppLayout
