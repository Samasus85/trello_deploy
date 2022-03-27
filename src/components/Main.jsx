import React, { Fragment } from 'react'
import Flex from '../UI/Flex'
import Todo from './Todo'
import AddCard from './AddCard'

const Main = () => {
  return (
    <Fragment>
      <Flex>
        <Todo />
        <AddCard />
      </Flex>
    </Fragment>
  )
}

export default Main;