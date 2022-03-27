import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo'
import useInput from '../hooks/useInput'
import Input from '../UI/input'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/isAuthenticatedSlice'
import { useNavigate } from 'react-router'
import Task from '../UI/img/task.svg'

const Login = () => {
	const navigate = useNavigate()
	const { isAuth } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const userEmail = useInput('Email')
	const userPassword = useInput('пароль')
	let formIsValid = false

	formIsValid = userEmail.valueIsValid && userPassword.valueIsValid

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(
			authActions.authentificate({
				email: userEmail.value,
				password: userPassword.value,
			}),
		)
		userEmail.onClear()
		userPassword.onClear()
	}

	useEffect(() => {
		if (isAuth) navigate('/trelloMain')
	}, [isAuth, navigate])


	return (
		<>


			<FormController>
				<div className='left'>
					<img src={Task} alt='check' />
				</div>
				<div className='center'>
					<Logo />
					<form onSubmit={submitHandler}>
						<h3>Вход в Тrello</h3>
						<div className='form-control'>
							<Input
								value={userEmail.value}
								onChange={userEmail.onChange}
								type='email'
								isValidInput={userEmail.valueInputIsInValid}
								onBlur={userEmail.onBlur}
								placeholder='Укажите адрес электронной почты'
							/>
						</div>
						<div className='form-control'>
							<Input
								type='password'
								placeholder='Введите пароль'
								value={userPassword.value}
								onChange={userPassword.onChange}
								onBlur={userPassword.onBlur}
								isValidInput={userPassword.valueInputIsInValid}
							/>
						</div>
						<Button disabled={!formIsValid} type='submit'>Войти</Button>
					</form>
				</div>
			</FormController>
		</>
	)
}

const FormController = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: space-between;
	margin-top: 120px;
	& .left{
		width: 80px;
		margin-left: 40px;
	}
	& .center{
		width: 1200px;
		margin: 0 auto;
	}
	form {
		width: 440px;
		height: 310px;
		padding: 2rem;
		background-color: #ffffff;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: 20px auto;
		.form-control {
			width: 90%;
			margin-bottom: 10px;
			input {
				width: 100%;
			}
			p {
				color: red;
				font-size: 12px;
			}
		}
		button {
			width: 90.5%;
			margin-bottom: 30px;
		}
		span {
			width: 70%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			/* a {
				font-size: 12px;
				color: #598ede;
			} */
		}
	}
	h3 {
		color: #598ede;		
	}
`

export default Login

