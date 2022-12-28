import React, { useMemo } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { TodoType } from '../types/todo';

const Container = styled.div`
	width: 100%;

	.todo-list-header {
		padding: 12px;
		border-bottom: 1px solid ${palette.gray};

		.todo-list-last-todo {
			font-size: 14px;
			span {
				margin-left: 8px;
			}
		}
	}
`;

interface IProps {
	todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
	type ObjectIndexType = {
		[key: string]: number | undefined;
	};

	const todoColorNums = useMemo(() => {
		const colors: ObjectIndexType = {};
		todos.forEach((todo) => {
			const value = colors[todo.color];
			if (!value) {
				colors[`${todo.color}`] = 1;
			} else {
				colors[`${todo.color}`] = value + 1;
			}
		});
		return colors;
	}, [todos]);

	return (
		<Container>
			<div className="todo-list-header">
				<p className="todo-list-last-todo">
					남은 TODO<span>{todos.length}개</span>
				</p>
			</div>
		</Container>
	);
};
export default TodoList;
