import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { HiOutlineCheckCircle } from "react-icons/hi";

const Todo = ({ text, todo, todos, setTodos }) => {
	// event handlers
	const deleteHandler = () => {
		//deletes the todo item whose id matches the todo clicked
		setTodos(todos.filter((el) => el.id !== todo.id));
		// console.log(todo);
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div
			className={todo.completed ? "todo-row completed" : "todo-row"}
			key={text}
		>
			<div
				key={todo.id}
				onClick={completeHandler}
			>
				{todo.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={deleteHandler}
					className="delete-icon"
				/>

				<HiOutlineCheckCircle
					onClick={completeHandler}
					className="check-icon"
				/>
			</div>
		</div>
	);
};

export default Todo;
