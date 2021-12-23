import React from 'react'
import {storiesOf} from '@storybook/react'

import Button from '../src/components/Button'
import Input from '../src/components/Input'
import PollListItem from '../src/components/PollListItem'

storiesOf('Button', module)
  .add('Button', () => (
    <Button>Add new poll</Button>
  ))
  // .add('Button With Spinner', () => (
  //   <Button loading={true}>Add new poll</Button>
  // ))
  // .add('Button [disabled]', () => (
  //   <Button disabled={true}>Add new poll</Button>
  // ))
  // .add('Button Disabled With Spinner', () => (
  //   <Button loading={true} disabled={true}>Add new poll</Button>
  // ))

storiesOf('Input', module)
  .add('Basic Input', () => (
    <Input />
  ))

storiesOf('PollListItem', module)
  .add('PollListItems', () => {
    const polls = [{
      id: "5fae5f1c68992ec350f6b79d",
      letters: "WF",
      question: "What is your favourite programming language?"
    }, {
      id: "5fae5f4368992ec350f6b79e",
      letters: "GD",
      question: "Game Development vs Mobile Development"
    }, {
      id: "5fae8090d43732c81bd9f6bc",
      letters: "CD",
      question: "Cats or Dogs"
    }]

    return polls.map(({id, letters, question}) => (
      <PollListItem
        key={id}
        letters={letters}
        question={question}
      />
    ))
  })
