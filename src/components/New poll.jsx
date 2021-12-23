import React from 'react'
import styled from 'styled-components'

import colors from '../colors'
import typo from '../typo'

const ButtonTag = styled.button`
  ${typo.button};
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: #8897AD;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;
  padding-left: 12px;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grayBlue};
    color: ${colors.brightPrimary};
    }
`

export default function Button2({children, onClick}) {
  return (
    <ButtonTag onClick={onClick}>{children}</ButtonTag>
  )
}