import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'

interface InputStyles {
  position?: string
  top?: string
  left?: string
}


export const InputStyled = styled.input<InputStyles>`
  border: 1px solid ${colors.grayClear}; 
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
`
interface IInput {
  type: string
  value: string
  position?: string
  top?: string
  left?: string
  className?: string
  onClick?: (event: any) => void
  onChange?: (event: any) => void
}

const Input: FC<IInput> = ({ 
  type, 
  value,
  position,
  top,
  left,
  className, 
  onClick, 
  onChange 
  }) => <InputStyled className={`input ${className}`} 
  type={type} 
  value={value} 
  position={position}
  top={top}
  left={left}
  onClick={onClick} 
  onChange={onChange}
  />


export default Input
