import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Input, InputBoxStyled } from '../'
import { colors } from '../../appSettings/stylesSettings'

interface UploadStyles {}

const UploadStyled = styled.div<UploadStyles>`
  position: relative;
  bottom: 0px;
  width: 100%;
  background-color: ${colors.white};
  min-height: 520px;
  max-height: 700px;
  padding-bottom: 70px;
  ${InputBoxStyled} {
    > div {
      width: 100%;
      position: absolute;
      bottom: 0px;
      background-color: ${colors.grayClear};
      border-top: 2px solid ${colors.cherzBlue};
      margin-bottom: 0;
      &.image {
        background-color: ${colors.white};
        border-top: 0px solid;
        position: relative;
        width: calc(100% - 40px);
      }
    }
  }
`
interface IUpload {
  type: string
  label?: string
  children?: ReactNode
  className?: string
  onChange?: (event: any) => void
}

const Upload: FC<IUpload> = ({ children, type, label, className, onChange }) =>
  <UploadStyled className={`upload ${className}`}> 
    {children}
    <Input label={label} type={type} onChange={onChange}/>
  </UploadStyled>

export default Upload
