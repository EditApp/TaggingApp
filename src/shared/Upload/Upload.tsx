import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import {Input} from '../'
interface UploadStyles {}

const UploadStyled = styled.div<UploadStyles>`
`
interface IUpload {
  type: string
  children?: ReactNode
  className?: string
  onChange?: (event: any) => void
}

const Upload: FC<IUpload> = ({ children, type, className, onChange }) =>
  <UploadStyled
    className={`upload ${className}`}
  > 
  {children}
     <br/>
   <Input type={type} onChange={onChange}/>

   
  </UploadStyled>

export default Upload
