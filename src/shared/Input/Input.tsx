import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'

interface InputStyles {
  position?: string
  top?: string
  left?: string
  display?: string
}

export const InputBoxStyled = styled.div<InputStyles>`
  display: block;
  margin-bottom: 5px;
  width: 100%;
  padding: 10px;
`

export const LabelStyled = styled.label<InputStyles>`
  display: block;
  font-size: .7rem;
  color: ${colors.dark};
`
export const InputStyled = styled.input<InputStyles>`
  font-size: .8rem;
  border: 1px solid ${colors.grayClear}; 
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  display: ${props => props.display};
  padding: 8px;

  &::-webkit-file-upload-button,
  &[type="submit"],
  &[type="button"] {
    padding: 8px;
    border: 0px solid transparent;
    background-color: ${colors.cherzBlue};
    border-color: ${colors.cherzBlue};
    color: ${colors.white};
    font-size: .8rem;
  }
  &[type="file"] {
    padding: 0px;
  }
`
interface IInput {
  type: string
  label?: string
  value?: string
  position?: string
  top?: string
  left?: string
  display?: string
  className?: string
  onClick?: (event: any) => void
  onChange?: (event: any) => void
}

const Input: FC<IInput> = ({
  type,
  label,
  value,
  position,
  top,
  left,
  display,
  className,
  onClick,
  onChange
}) => <InputBoxStyled>
    <LabelStyled>{label}</LabelStyled>
    <InputStyled className={`input ${className}`}
      type={type}
      value={value}
      position={position}
      top={top}
      left={left}
      display={display}
      onClick={onClick}
      onChange={onChange}
    />
  </InputBoxStyled>

export default Input
