//get everything into "states" so react can work with it
//to get the "todo" text from the text field we use the useState library of react
//,{libNames to include}
import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	//useStates
	//const[value, fxn that allows to change the value]
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	//useEffect

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
		// console.log("hey");
	}, [todos, status]);

	//functions
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(
					todos.filter((todo) => todo.completed === true)
				);
				break;
			case "uncompleted":
				setFilteredTodos(
					todos.filter((todo) => todo.completed === false)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	//save to local storage
	const saveLocalTodos = () => {
		if (todos.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todos));
		}
	};
	//get from local storage
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};

	//delete all todos
	const removeAllHandler = () => {
		setTodos([]);
		localStorage.setItem("todos", JSON.stringify([]));
	};
	return (
		<div className="App">
			<header>
				<h1>Todo List App</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				setTodos={setTodos}
				todos={todos}
				filteredTodos={filteredTodos}
			/>
			<div class="box-2">
				<div
					class="btn btn-two"
					onClick={removeAllHandler}
				>
					<span>Clear All</span>
				</div>
			</div>
			{/* <div className="remove-all">
				<button
					type="button"
					className="btn btn-light"
					onClick={removeAllHandler}
				>
					Clear List
				</button>
			</div> */}
		</div>
	);
}

export default App;
