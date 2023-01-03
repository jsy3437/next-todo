import { TodoType } from '../../types/todo';
import { readFileSync, writeFileSync } from 'fs';

const getList = () => {
	const todosBuffer = readFileSync('data/todos.json');
	const todosString = todosBuffer.toString();
	if (!todosString) {
		return [];
	}
	const todos: TodoType[] = JSON.parse(todosString);
	return todos;
};

export default { getList };
