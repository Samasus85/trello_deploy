
import { createSlice } from '@reduxjs/toolkit'

const base = [
	{
		id: Date.now(),
		email: 's@gmail.com',
		password: '123',
	},

]


const initState = {
	isAuth: false,
	errorMessage: '',
	personalAccount: {},
}

const authSlice = createSlice({
	name: 'authentificated',
	initialState: initState,
	reducers: {
		authentificate(state, action) {
			for (const el of base) {
				if (el.email === action.payload.email && el.password === action.payload.password) {
					state.isAuth = true
					state.personalAccount = { ...el }
					state.errorMessage = ''
					break;
				} else {
					state.errorMessage = 'Возможно вы ввели неправильный логин или пароль'
				}
			}
		},
		logout(state) {
			state.errorMessage = '';
			state.isAuth = false;
		}
	},
})
export const authActions = authSlice.actions
export default authSlice