import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
	//Write javascript code/fxns
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		//pass the text to setInputText fxn
		setInputText(e.target.value);
	};

	//ADDI
	const blankText = () => {
		for (let i = 0; i < inputText.length; i++) {
			if (inputText[i] !== " ") {
				return false;
			}
		}
		return true;
	};
	//
	const submitTodoHandler = (e) => {
		//prevents the submit button from automatically
		//refreshing the page
		e.preventDefault();
		//ADDI
		if (!blankText()) {
			//
			setTodos([
				...todos,
				{
					text: inputText,
					completed: false,
					id: Math.random() * 1000,
				},
			]);
		}
		//resets the state of text box to empty string(the "STATE" not the "UI")"
		setInputText("");
	};

	const statusHandler = (e) => {
		// console.log(e.target.value);
		setStatus(e.target.value);
	};

	return (
		<form className="todo-form">
			<input
				placeholder="Add a todo"
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				className="todo-input"
			/>
			<button
				onClick={submitTodoHandler}
				className="todo-button"
				type="submit"
			>
				Add todo
			</button>
			{/* adding filter for completed/not completed todos using "select" tag */}
			<div className="select">
				<select
					onChange={statusHandler}
					name="todos"
					className="filter-todo"
				>
					<option value="all">All</option>
					<option value="completed">Complete</option>
					<option value="uncompleted">Incomplete</option>
				</select>
			</div>
		</form>
	);
};

// To hook into the App.js file
export default Form;
