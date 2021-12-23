import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const LabelTag = styled.div`
  ${typo.label1};
  color: ${colors.mainText};
  margin-bottom: 12px;
`

const InputTag = styled.input`
  ${typo.input};
  width: 100%;
  display: inline-block;
  caret-color: ${colors.mainText};
  padding: 16px 13px;
  color: ${colors.mainText};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  outline: 0;
  text-align: left;
  margin-bottom: 4px;
  border: 1px solid ${props => props.isError ? colors.error : colors.gray};

  &::placeholder {
    color: ${colors.placeholderText};
    opacity: 1;
  }
  
  &:hover,
  &:focus {
    border-color: ${props => props.isError ? colors.error : colors.brightPrimary};
  }
`;

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, placeholder, value, onChange  } = this.props

    return (
      <>
        <LabelTag>{label}</LabelTag>
        <InputTag
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </>
    )
  }
}
