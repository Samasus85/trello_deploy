import React from 'react'
import styled from 'styled-components'

const TextArea = (props) => {
	return <TextAreaStyle  {...props} />
}
const TextAreaStyle = styled.textarea`
	padding: 0.8rem 1rem;
	border: none;
	outline: none;
	color: #bbbbbb;
	font-size: 17px;
	background-color: #fafbfc;
	border: 2px solid ${props => props.isValidInput ? 'red' : '#e4e6ea'};
	transition: 0.2s;
	&::placeholder {
		color: #bbbbbb;
	}
	&:focus {
		border-color: ${props => props.isValidInput ? 'orange' : '#70afff'};
	}
`

export default TextArea;