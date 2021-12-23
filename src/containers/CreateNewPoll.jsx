import React, {useState} from "react"
import {useLocation } from 'wouter'
import api from "../api"

import styled from "styled-components"
import Spinner from '../components/Spinner'

import colors from '../colors'
import typo from '../typo'
import Input from "./Input"


const CreateNewPooll = styled.div`
  ${typo.body1};
  text-align: center; 
`

const H2 = styled.h2`
  ${typo.h2}
  font-size: 15px;
  line-height: 18px;
  color: ${colors.secondaryTextOnGray};
  `

const PollForm = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  width: 520px;
  max-height: 395px;
  margin: 0 auto;
  // border: 1px solid #F1F1F1;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 32px 0px 32px 40px;
  overflow: auto; 
  &::-webkit-scrollbar {
    width: 6px;               /* ширина scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};        /* цвет дорожки */
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};    /* цвет плашки */
    border-radius: 5px;       /* закругления плашки */
    border: 1px solid ${colors.white};  /* padding вокруг плашки */
  }
  `

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  margin-bottom: 12px;
  text-align: center;
`

const AddOptions = styled.p`
${typo.label1};
color: ${colors.mainText};
text-align: left;
cursor: pointer;
`

const ButtonCreatePoll = styled.button`
${typo.body1};
border: none;
cursor: pointer;
width: 360px;
height: 48px;
background-color: ${colors.brightPrimary};
color: ${colors.white};
border-radius: 8px;
margin-top: 32px;
  &:hover{
    background-color: ${colors.mediumPrimary};
  }

  &:disabled {
    background: #B6C5DC;
  }
`

export default function CreateNewPoll(){
 
  const [namePoll, setNamePoll] = useState({value: "" , validate: true})
  const [options, setOptions] = useState([
    {id: 1, value: "" , validate: true},
    {id: 2, value: "" , validate: true}
  ])
  const [isFormValid, setIsFormValid] = useState(false)
  const [id, setID] = useState(2)
  const [location, setLocation] = useLocation();
  const [sendPoll, setSend] = useState(false)

  const addNewOption = () => {
    let arrayOptions = options;
    arrayOptions.push({id: id+1, value: "" , validate: true })
    setOptions(arrayOptions)
    setID(id + 1)
    ValidateAllOptions()
  }

  const deleteOption = (item) => {
    setOptions( prevState => {
      const newState = [...prevState].filter((el) => el.id !== item)
      return newState
    })
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
      if (name == "namePoll"){
      const { validate } = namePoll;
      setNamePoll({ value, validate })
    }
    else {
      setOptions( prevState => {
        const newState = [...prevState]
        newState[name - 1].value = value
        return newState
      })
    }
  }

  const validate = (value, name) => {

    if (name === "namePoll"){
      const check = value.length > 0;
    setNamePoll({ value: namePoll.value, validate: check })
    return check;
    }

    else{
      let check;
      options.forEach(element => {
        if(element.id==name)
          check = element.value===""
        setOptions( prevState => {
          const newState = [...prevState]
          newState[name - 1].validate = !check
          return newState
        })
        // setOptions(arrayOptions)
        return check
      });

      ValidateAllOptions()
      
    }

  }

  const ValidateAllOptions = () =>{
    let number = 0;
      if(namePoll.value !== "")
        number++
      options.forEach((item) => {
        if (item.value !== "") number++
      })
      if (number === (options.length + 1))
        setIsFormValid(true)
      else setIsFormValid(false)
  }

  const createPoll = (e) => {
    setSend(true)
    const optionsPolls = []
    options.forEach((item) => {
      if (item.value != "")
        optionsPolls.push({"title": item.value})
    })
    const poll = {
      "question": namePoll.value,
      "options": optionsPolls
    }
    api.createPoll(poll).then(() =>
    { setSend(false)
      setLocation("/")})
  }



return(
  <CreateNewPooll>
    <H1>Create a new poll</H1>
    <H2>To start a poll just share a link on them with your friends.</H2>
    <H2>Once you have one vote it can't be edited anymore.</H2>
    <PollForm>
      <Input
       name = "namePoll"
       type = "text"
       label = "Poll question"
       placeholder = "Eg. What is your favourite programming language?"
       deleted = {false}
       value = {namePoll.value}
       validate = {validate}
       onChange = {handleInputChange}
       messageError="This fuild is required"
       valid = {namePoll.validate}
        />
     {options.map((item, index) => (
        <Input
          key ={item.id}
          id ={item.id}
          name = {(index + 1)}
          label={"Option " + (index + 1)}
          placeholder={"Eg. option " + (index + 1)}
          value = {item.value}
          validate = {validate}
          onChange = {handleInputChange}
          messageError = "Should be a valid name"
          remove={deleteOption}
          deleted={index>1?true:false}
          valid = {item.validate}
        >
        </Input>
      ))}
      <AddOptions onClick={addNewOption}>+ Add another options</AddOptions>
      </PollForm>
      <ButtonCreatePoll onClick={createPoll} disabled={!isFormValid} >
        {!sendPoll? "Create poll" : <Spinner color = "#FFF" scale={0.75} margin={'0 154px'}></Spinner>}
        </ButtonCreatePoll>
    </CreateNewPooll>
    )
}