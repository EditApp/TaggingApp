import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'

interface FieldsetStyles { }

export const FieldsetStyled = styled.fieldset<FieldsetStyles>`
  padding: 20px;
  background-color: ${colors.dust};
  -webkit-box-shadow: 0 2px 10px 1px #0E1173;
  box-shadow: 0 2px 10px 1px #0E1173;

  input[type="submit"],
  input[type="button"] {
    width: 100%;
  }
`

const Legend = styled.legend`
  color: ${colors.dark};
  position: relative;
  padding: 8px;
  font-size: 1rem;
  top: 16px;
`

interface IFieldset {
  children: ReactNode
  legend?: string
  className?: string
}

const Fieldset: FC<IFieldset> = ({ children, legend, className }) =>
  <FieldsetStyled
    className={`fieldset ${className}`}
  >
    {legend && <Legend>{legend}</Legend>}
    {children}
  </FieldsetStyled>

export default Fieldset
