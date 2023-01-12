import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todo from './todo';

// combineReducers를 사용해 모듈별 reducer를 하나로 모아줌
const rootReducer = combineReducers({
	todo: todo.reducer,
});

// _NEXT_REDUX_WRAPPER_HYDRATE_ 타입인 reducer를 추가
// (Hydrate는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용 할 수 있도록 전달해주는 역할을 한다.)
const reducer = (state: any, action: any) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		};
		if (state.count) nextState.count = state.count;
		return nextState;
	}
	return rootReducer(state, action);
};

// 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
	return configureStore({ reducer, devTools: true });
};

export const wrapper = createWrapper(initStore);
