import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

export default function Poll({params}) {
  return (
    <H1>{params.pollId}</H1>
  )
}
