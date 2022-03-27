import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const Todo = () => {
	const { colunmns, task, editShowTask } = useSelector(
		(state) => state.column,
	)
	useEffect(() => {
		localStorage.setItem('trello', JSON.stringify(colunmns))
	}, [colunmns])
	return (
		<Wrapper>
			<GlobalStyle />
			{colunmns.map((el) => (
				<TodoItem
					showEditTask={editShowTask}
					task={task}
					key={el.id}
					id={el.id}
					title={el.title}
					todos={el.todos}
				/>
			))}
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: flex;
	margin-right: 20px;
`
const GlobalStyle = createGlobalStyle`
  body {
	background: rgb(229, 167, 248);
  }
`;

export default Todo;
