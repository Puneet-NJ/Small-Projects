const TodoInput = ({ todo, setTodo, handleAddTodo }) => {
	return (
		<div className="">
			<h1 className="text-center mb-10 text-4xl font-medium ">Todo app</h1>
			<form className="flex flex-col items-center" onSubmit={handleAddTodo}>
				<input
					placeholder="Enter a new Todo"
					className="border border-black p-3 w-3/4 rounded-lg"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button
					onClick={handleAddTodo}
					className="border border-black p-3 rounded-lg px-7 my-7 hover:scale-110 hover:bg-green-200 duration-150"
				>
					ADD
				</button>
			</form>
		</div>
	);
};

export default TodoInput;
