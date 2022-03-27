import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { authActions } from '../store/isAuthenticatedSlice'
import { columnActions } from '../store/column-slice'
import Logo from '../UI/img/trello.svg';
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logoutHandler = () => {
		dispatch(columnActions.logout())
		navigate('/')
		dispatch(authActions.logout())
	}

	return (
		<HeaderStyle>
			<div className='header'>
				<div className='header-flex'>
					<div className='logo'>
						<img src={Logo} alt='logo' />
					</div>
					<div>
						<h2>TRELLO</h2>
					</div>
					<div>
						<Link to='./workspace'>Рабочее пространство</Link>
					</div>
				</div>
				<div >
					<Button onClick={logoutHandler}>Выйти</Button>
				</div>
			</div>
		</HeaderStyle>
	)
}
const HeaderStyle = styled.div`
    position: fixed;
    width: 100%;
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background:  rgba(0, 0, 0, 0.1);
	z-index: 3;
	& .header{
		width: 1200px;
		display:flex;
		align-items: center;
	}
	& .header-flex{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 250px;
	}
	& h2 {
			color: blue;
			font-size: 25px;
			width: 120px;
		}
		
	& img {
			width: 30px;
			height: 30px;
			margin-right: 20px;
		}
	& button{
			margin-left: 60rem;
			border-radius: 15px;
			width: 100px;
			height: 35px;
			
		}
	
`

export default Header
