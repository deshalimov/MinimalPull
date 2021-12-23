import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
`

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  text-align: center;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  margin-top: 40px;
`

const Text = styled.div`
  ${typo.body1};
  color: ${colors.secondaryTextOnGray};
  text-align: center;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  margin-top: 8px;
`

const Widget = styled.div`
  max-width: ${props => props.maxWidth};
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 16px;
`

export default function WidgetWithTitle({header, text, maxWidth, children}) {
  return (
    <Container>
      <H1 maxWidth={maxWidth}>{header}</H1>
      <Text maxWidth={maxWidth}>{text}</Text>
      <Widget maxWidth={maxWidth}>{children}</Widget>
    </Container>
  )
}