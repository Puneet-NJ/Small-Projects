import React from "react";
import ReactDOM from "react-dom/client";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

const App = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todo !== "") {
			// console.log(todos);
			setTodos([...todos, todo]);
			setTodo("");
		}
	};

	const handleDeleteTodo = (todoToDelete) => {
		const newTodos = todos.filter((todo) => {
			if (todo !== todoToDelete) return todo;
		});

		setTodos(newTodos);
	};

	return (
		<div className=" bg-neutral-200">
			<div className="h-screen w-6/12 mx-auto py-20">
				<TodoInput
					todo={todo}
					setTodo={setTodo}
					handleAddTodo={handleAddTodo}
				/>
				<TodoItems todos={todos} handleDeleteTodo={handleDeleteTodo} />
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
