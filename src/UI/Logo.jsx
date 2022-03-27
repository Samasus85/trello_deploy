import React from 'react'
import styled from 'styled-components'
import LogoImg from './img/trello.svg';

const Logo = () => {
	return (
		<Trello>
			<div>
				<img src={LogoImg} alt='logo' />
			</div>
			<h1>Trello</h1>
		</Trello>
	)
}

const Trello = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
   
	h1 {
		font-size: 50px;
		color: #0091E6;
	}
	
`

export default Logo;
