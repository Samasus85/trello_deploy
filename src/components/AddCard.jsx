import styled from 'styled-components'

import Input from '../UI/input'
import Button from '../UI/Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import { columnActions } from '../store/column-slice'


const AddCard = () => {
	const data = useSelector((state) => state.column.colunmns)
	const dispatch = useDispatch()
	const [show, setShow] = useState(false)
	const column = useInput()

	const showHandler = () => setShow(true)
	const hideHandler = () => setShow(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (column.value.trim() === '') return
		dispatch(
			columnActions.createColumn({
				title: column.value,
				id: Math.random().toString(),
			}),
		)
		column.onClear()
	}
	return (
		<div >
			<List show={show} onClick={showHandler}>+
				<span>
					{data.length === 0 ? 'Добавить списиок'
						: 'Добавить ещё одну колонку'}
				</span>
			</List>
			<AddList show={show}>
				<form onSubmit={handleSubmit}>
					<Input
						type='text'
						value={column.value}
						placeholder='Ввести заголовок списка'
						onChange={column.onChange}
						autoFocus />
					<div>
						<Button className='add__list'>Добавить списиок</Button>
						<button onClick={hideHandler} type='button' className='remove'>
							X
						</button>
					</div>
				</form>
			</AddList>
		</div>
	)
}


const AddList = styled.div`
	width: 270px;
	height: ${(props) => (!props.show ? '0px' : '87px')};
	background-color: rgb(246, 222, 253);
	padding: 0.25rem;
	box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.1);
	border-radius: 3px;
	transition: 0.3s;
	display: ${(props) => (!props.show ? 'none' : 'block')};
	div {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.remove {
		border: none;
		background-color: transparent;
		margin-left: 35px;
		font-size: 20px;
		cursor: pointer;
	}
	.add__list {
		background-color: #0079bf;
		font-weight: 400;
		font-size: 14px;
		cursor: pointer;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	input {
		width: 85%;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		font-size: 14px;
		margin-bottom: 0.25rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	input::placeholder {
		color: #838ea0;
	}
`
const List = styled.div`
	width: 240px;
	height: 45px;
	padding: 0rem 0.6rem;
	background-color: rgba(0, 0, 0, 0.2);
	color: white;
	display: flex;
	align-items: center;
	border-radius: 3px;
	box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.1);
	cursor: pointer;
	position: absolute;
	transition: 0.2s;
	z-index: ${(props) => (props.show ? '-1' : '1')};
	opacity: ${(props) => (props.show ? '0' : '1')};
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	&:hover {
		background-color: blue;
	}
	span {
		margin-left: 15px;
		font-size: 14px;
		font-weight: 500;
	}
`

export default AddCard
