import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../types/todo';

// 액션타입 정의
export const INIT_TODO_LIST = 'todo/INIT_TODO_LIST';

// 액션 생성자 정의
export const setTodo = (payload: TodoType[]) => {
	return {
		type: INIT_TODO_LIST,
		payload,
	};
};

interface TodoReduxState {
	todos: TodoType[];
}

const initialState: TodoReduxState = {
	todos: [],
};

// createSlice는 reducer를 생성하던 기존 방식에 액션타입을 자동으로 설정하고
// 상태관리를 위해 불변성 유지를 위해 복잡해지는 코드를 간결하게 작성할 수 있도록 도와주는 등의 편의 기능이 제공된다.(redux-toolkit)
const todo = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setTodo(state, action: PayloadAction<TodoType[]>) {
			state.todos = action.payload;
		},
	},
});

export const todoActions = { ...todo.actions };

export default todo;
