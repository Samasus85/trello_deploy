import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
	return (
		<ButtonStyle {...props}>
			{props.children}
			<div className='message'>заполните поля!!</div>
		</ButtonStyle>
	)
}

const ButtonStyle = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	outline: none;
	background-color: #56efef;
	opacity: 0.6;
	color: blue;
	font-weight: bold;
	font-size: 17px;
	border-radius: 3px;
	position: relative;
	cursor: pointer;

	.message {
		position: absolute;
		top: 30px;
		left: 378px;
		padding: 0.7rem 1rem;
		background-color: #a8ddfd;
		width: 200px;
		height: 50px;
		border-radius: 10px;
		animation: message ease-in 0.4s;
		display: none;
	}
	.message:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-top: 15px solid #a8ddfd;
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
		top: 0;
		left: -15px;
	}

	&:hover {
		opacity: 0.9;
	}
	@keyframes message {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	&:disabled,
	&:disabled:active {
		cursor: not-allowed;
	}
	&:disabled:hover .message {
		display: block;
	}
`

export default Button
