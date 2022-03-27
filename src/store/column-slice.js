import { createSlice } from '@reduxjs/toolkit'

const initState = {
	colunmns: JSON.parse(localStorage.getItem('trello')) || [],
    task : {},
    editShowTask : false
}
const columnSlice = createSlice({
	name: 'trelloSlice',
	initialState: initState,
	reducers: {
		createColumn(state, action) {
			state.colunmns = [
				...state.colunmns,
				{ ...action.payload, todos: [] },
			]
		},
		createTask(state, action) {
			state.colunmns = state.colunmns.map((el) => {
				if (el.id === action.payload.id) {
					el.todos = [
						...el.todos,
						{
							task: action.payload.task,
							id: Math.random().toString(),
						},
					]
				}
				return el
			})
		},
		deleteColumn(state, action) {
			state.colunmns = state.colunmns.filter(
				(el) => el.id !== action.payload,
			)
		},
        showEditTasks(state,action){
            state.editShowTask = true;
            state.task = {...action.payload}
        },
        hideEditTasks(state){
            state.showEditTasks = false
        },
		editTitle(state, action) {
			state.colunmns.forEach((el) => {
				if (el.id === action.payload.id) {
					el.title = action.payload.value
				}
				return el
			})
		},
		editTask(state, action) {
            state.editShowTask = false
			const obj = state.colunmns.find(
				(el) => el.id === action.payload.parentId,
			)
			obj.todos.forEach((task) => {
				if (task.id === action.payload.id) {
					task.task = action.payload.task
				}
				return task
			})
		},
		removeTask(state, action) {
            state.editShowTask = false
			const obj = state.colunmns.find(
				(el) => el.id === action.payload.parentId,
			)
			state.colunmns.forEach((el) => {
				if (el.id === action.payload.parentId) {
					el.todos = obj.todos.filter(
						(task) => task.id !== action.payload.id,
					)
				}
			})
		},
		hideEditedTask(state){
            state.editShowTask = false
		},
		logout(state){
			state.colunmns = [];
		}
	},
})
export const columnActions = columnSlice.actions
export default columnSlice
