import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "wouter"

import Spinner from "../components/Spinner"
import PollListItem from "../components/PollListItem"

import api from '../api'
import colors from '../colors'
import typo from '../typo'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 560px;
  margin: 70px auto 24px;
`

const H2 = styled.h2`
  ${typo.h2};
  color: ${colors.mainText};
  
  text-align: left;
`

const PollList = styled.div`
  max-width: 560px;
  margin: 0 auto;
`

const NewPollButton = styled.button`
  ${typo.button}
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

const DivCreateNewPoll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  width: 560px;
  height: 340px;
  border: 1px dashed #8897AD;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 auto;
`

const H3 = styled.h2`
  ${typo.body1};
  color: ${colors.secondaryTextOnGray};
  width: 360px;
  height: 54px;
  text-align: center;
`

const ButtonCrateNewPoll = styled.button`
  ${typo.button};
  color: ${colors.white};
  background: ${colors.brightPrimary};
  border:none;
  border-radius: 8px;
  width: 180px;
  height: 40px;
  cursor: pointer;
  margin-top: 16px;
  &:hover{
    background: ${colors.mediumPrimary}
  }
`

export default function MyPolls() {
  const [polls, setPolls] = useState(null)
  
  useEffect(() => {
     api.getPolls().then((data) => setPolls(data.polls))
  }, [])

  if (!polls) {
    return <Spinner margin="70px auto"/>
  }

   const DeletePoll = (id) => {
     api.DeletePoll(id).then(()=>
     api.getPolls().then((data) => {
       setPolls(data.polls)
   }))}

  return (
    <>
      <Header>
        <H2>Your Polls</H2>
        <Link to ="/new-poll">
          <NewPollButton>New poll</NewPollButton>
        </Link>
      </Header>
      {(polls.length > 0)?(
      <PollList>
        {polls.map(({id, letters, question, votes, createdAt}) => (
          <PollListItem
            key={id}
            letters={letters}
            question={question}
            votes={votes}
            createdAt={createdAt}
            id={id}
            DeletePoll = {DeletePoll}
            
          />
        ))}
      </PollList>):(
        <DivCreateNewPoll>
          <H3>There is no created polls yet. Create a poll and and share a link with anyone and gather votes in seconds.</H3>
          <Link to ="/new-poll">
          <ButtonCrateNewPoll>Create a new poll</ButtonCrateNewPoll>
          </Link>
        </DivCreateNewPoll>
      )}
    </>
  )
}
