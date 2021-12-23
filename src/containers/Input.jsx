import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

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
  cursor: pointer;
  border: 1px solid ${props => props.isError ? colors.error : colors.gray};
    &::placeholder {
      color: ${colors.placeholderText};
      opacity: 1;
    }
    &:focus {
      border-color: ${props => props.isError ? colors.error : colors.brightPrimary};
    }
`

const DIV = styled.div`
  margin-bottom: 24px;
  text-align: left; 
  cursor: pointer;
    &:hover {
      cursor: pointer;
    }
`

const Text1 = styled.div`
  display: flex;
  justify-content: flex-start
  ${typo.label1};
  color: ${colors.mainText};
  margin-bottom: 12px;
  text-align: left; 
`
const SvgDelete=styled.div`
  width:18px;
  height:18px;
  margin-left: 8px;
  margin-right: 18px;
  background-repeat: no-repeat;  
`

const Inp=styled.div`
  display:flex;
  align-items: center;  
  &:hover{
      & ${SvgDelete} {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H12V9C12 10.6569 10.8807 12 9.5 12H4.5C3.11929 12 2 10.6569 2 9V4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1C4 0.447715 4.44772 0 5 0H9ZM5 4C4.48716 4 4.06449 4.38604 4.00673 4.88338L4 5V9C4 9.55228 4.44772 10 5 10C5.51284 10 5.93551 9.61396 5.99327 9.11662L6 9V5C6 4.44772 5.55228 4 5 4ZM9 4C8.48716 4 8.06449 4.38604 8.00673 4.88338L8 5V9C8 9.55228 8.44772 10 9 10C9.51284 10 9.93551 9.61396 9.99327 9.11662L10 9V5C10 4.44772 9.55228 4 9 4Z' fill='%23DFE1E4'/%3e%3c/svg%3e ");            
          &:hover{
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H12V9C12 10.6569 10.8807 12 9.5 12H4.5C3.11929 12 2 10.6569 2 9V4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1C4 0.447715 4.44772 0 5 0H9ZM5 4C4.48716 4 4.06449 4.38604 4.00673 4.88338L4 5V9C4 9.55228 4.44772 10 5 10C5.51284 10 5.93551 9.61396 5.99327 9.11662L6 9V5C6 4.44772 5.55228 4 5 4ZM9 4C8.48716 4 8.06449 4.38604 8.00673 4.88338L8 5V9C8 9.55228 8.44771 10 9 10C9.51284 10 9.93551 9.61396 9.99327 9.11662L10 9V5C10 4.44772 9.55228 4 9 4Z' fill='%23F04F2B'/%3e%3c/svg%3e ");
          }
      }
  }
`

const ErrorMessage = styled.p`
  color: ${colors.error};
  font-family: Inter;
  text-align: left;
  font-size: 10px;
  margin-top: 4px;
  margin-bottom: 16px;
`

const DIV1 = styled.div`
  width:18px;
  height:18px;
  margin-left: 8px;
  margin-right: 18px;
`

export default class Input extends React.Component {
    constructor(props) {
      super(props)
  
      this.onBlur = this.onBlur.bind(this);
    }

    remove(item) {
      this.props.remove(item);
    }

    onBlur() {
        const{validate, value, name} = this.props
        validate(value, name)
    }

    
    render(){
        const{name, placeholder,  value, label, valid, deleted, onChange, messageError, id}=this.props;
        return(
    <DIV>
         <Text1>{label}</Text1>
        <Inp>
            <InputTag
                name = {name}
                placeholder={placeholder}
                value = {value}
                onBlur = {this.onBlur}
                onChange={onChange}
                isError={!valid}
            />
            
            {deleted? <SvgDelete onClick={this.remove.bind(this, id)}/>:<DIV1/>}
           
        </Inp>
        {!valid && <ErrorMessage>{messageError}</ErrorMessage>}
    </DIV>
        )}
}