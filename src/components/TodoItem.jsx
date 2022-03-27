import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../UI/input'
import Delete from '../UI/img/delete.svg'
import Button from '../UI/Button'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import Flex from '../UI/Flex'
import { columnActions } from '../store/column-slice'
import TextArea from '../UI/TextArea'


const TodoItem = ({ title, id, todos }) => {
	const [titleInp, setTitleInp] = useState(title)
	const dispatch = useDispatch()
	const [show, setShow] = useState(false)
	const todo = useInput()

	const changeHandler = (e) => setTitleInp(e.target.value)

	const showHandler = () => setShow(true)
	const hideHandler = () => setShow(false)

	const deleteColumnHandler = () => {
		dispatch(columnActions.deleteColumn(id))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (todo.value.trim() === '') return
		todo.onClear()
		dispatch(
			columnActions.createTask({
				task: todo.value,
				id: id,
			}),
		)
	}

	const editTitleHandler = (e) => {
		if (e.key === 'Enter') {
			if (!titleInp.trim()) return;
			dispatch(columnActions.editTitle({ id, value: titleInp }))
			e.target.blur()
		}
	}


	return (
		<CardList>
			<Card>
				<div className='fixed'>
					<Flex align='center' >
						<Input
							onKeyDown={editTitleHandler}
							className='title'
							value={titleInp}
							onChange={changeHandler}
						/>
						<div
							onClick={deleteColumnHandler}
							className='icon fixed'>
							<img src={Delete} alt="delete" />
						</div>
					</Flex>
				</div>
				<Flex justify='center' >
					<ul className='ul-list'>
						{todos.map((el) => (
							<li key={el.id}>
								<label>{el.task}</label>
							</li>
						))}
					</ul>
				</Flex>
				{!show && (
					<>
						<Flex align='center'>
							<button
								onClick={showHandler}
								className='btn-task-add'>+<span> Добавить карточку</span>
							</button>
						</Flex>
					</>
				)}
				{show && (
					<form className='form' onSubmit={handleSubmit}>
						<TextArea
							className='task'
							type='text'
							value={todo.value}
							placeholder='Ввести заголовок для этой карточки'
							onChange={todo.onChange}
						/>
						<div className='btn-group'>
							<Button type={'submit'} className='add__list'>
								Добавить карточку
							</Button>
							<button onClick={hideHandler} className='remove'>
								<span>X</span>
							</button>
						</div>
					</form>
				)}
			</Card>
		</CardList>
	)
}
const CardList = styled.section`
	position: relative;
	width: 270px;
	margin-right: 40px;
	animation: yes ease-in-out 0.3s;
	@keyframes yes {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
const Card = styled.div`
	width: 100%;
	background-color: rgb(246, 222, 253);
	padding: 0.5rem;
	padding-top: 0rem;
	box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.8);
	border-radius: 3px;
	transition: 0.2s;
	min-height: 50px;
	max-height: 502px;
	overflow-y: auto;
	::-webkit-scrollbar {
		background-color: transparent;
		width: 0.5rem;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 1rem;
		background-color: #d4d5d6;
	}
	.form {
		animation: yes ease-in 0.3s;
	}
	@keyframes yes {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.title {
		width: 100%;
		padding: 0.2rem 0.7rem;
		background-color: transparent;
		color: blue;
		border: 2px solid transparent;
		cursor: pointer;
		border-radius: 3px;
		font-size: 14px;
		color: #3e4f6b;
		font-weight: 500;
		margin-bottom: 0.25rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		&:focus {
			background-color: #ffffff;
			border: 2px solid #70afff;
			cursor: text;
		}
	}
	.fixed {
		padding: 0.3rem 0;
		position: sticky;
	background-color: rgb(246, 222, 253);
		top: 0;
		left: 0;
		z-index: 10;
		cursor: pointer;
	
	img{
		width: 20px;
		height: 20px;
	}
	
}
	.btn-group {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.add__list {
		background-color: #0079bf;
		font-weight: 400;
		font-size: 14px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.remove {
		border: none;
		background-color: transparent;
		margin-left: 5px;
		cursor: pointer;
		span{
			display: flex;
			align-items: center;
			width: 40px;
			height: 40px;
			font-size: 22px;
			margin-left: 20px;
		}
	}
	.icon {
		padding: 5px;
		background-color: transparent;
		
	}
	& label{
				color: blue;
			}
	.ul-list {
		width: 98.5%;
		margin-bottom: 5px;
	
		li {
			width: 100%;
			height: 40px;
			margin-right: 15px;
			padding: 0.2rem 0.7rem;
			list-style: none;
			background-color: #ffffff;
			color: #818c9f;
			box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1);
			margin-bottom: 3px;
			border-radius: 3px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			transition: 0.2s;
			position: relative;
			animation: yes ease-in 0.3s;
			@keyframes yes {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			&:hover .iconEdit {
				display: block;
			}
			&:hover {
				background-color: whitesmoke;
			}
			.iconEdit {
				padding: 5px;
				background-color: transparent;
				display: none;
				border-radius: 3px;
				transition: 0.2s;
				&:hover {
					background-color: #d4d5d6;
				}
			}
		}
	}

	.task {
		width: 100%;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		font-size: 14px;
		margin-bottom: 0.25rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.btn-task-add {
		border: none;
		width: 95%;
		height: 30px;
		padding: 0rem 0.5rem;
		background-color: transparent;
		color: #3e4f6b;
		display: flex;
		align-items: center;
		border-radius: 3px;
		cursor: pointer;
		transition: 0.2s;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		span {
			margin-left: 5px;
			font-size: 14px;
			font-weight: 500;
		}
		&:hover {
			background-color: #d4d5d6;
		}
	}
	.tile-group {
		/* position: fixed; */
	}
`

export default TodoItem;
