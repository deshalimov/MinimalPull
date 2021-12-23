import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { Route } from "wouter"

import Header from "./components/Header"

import MyPolls from "./containers/MyPolls"
import Keystore from "./containers/Keystore"
import Poll from "./containers/Poll"
import CreateNewPoll from "./containers/CreateNewPoll"

import colors from './colors'
import typo from './typo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background: ${colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.lightestGray};
  padding-bottom: 100px;
`
const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  margin-bottom: 12px;
  text-align: center;
`

const App = () => (
  <Container>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <Content>
      <Route path="/" component={MyPolls} />
      <Route path="/visited-polls">
        <H1>Visited Polls</H1>
      </Route>
      <Route path="/new-poll" component={CreateNewPoll}/>
      <Route path="/keystore" component={Keystore} />
      <Route path="/poll/:pollId" component={Poll} />
    </Content>
  </Container>
)

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
