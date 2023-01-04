import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 16px;

	.add-todo-header-title {
		font-size: 21px;
	}

	.add-todo-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.add-todo-submit-button {
			padding: 4px 8px;
			border: 1px solid black;
			border-radius: 5px;
			background-color: white;
			outline: none;
			font-size: 14px;
		}
	}
`;

const AddTodo: React.FC = () => {
	return (
		<Container>
			<div className="add-todo-header">
				<h1 className="add-todo-header-title">Add Todo</h1>
				<button
					type="button"
					className="add-todo-submit-button"
					onClick={() => {}}
				>
					추가하기
				</button>
			</div>
		</Container>
	);
};

export default AddTodo;
