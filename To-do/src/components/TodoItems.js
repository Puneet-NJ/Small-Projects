import DeleteIcon from "../../images/deleteIcon.png";

const TodoItems = ({ todos, handleDeleteTodo }) => {
	return (
		<>
			{todos.length > 0 ? (
				<ul className="">
					{todos.map((item, index) => (
						<li
							key={index}
							className="flex justify-between w-3/4 mx-auto bg-gray-100 p-3 px-5 my-4 shadow-lg rounded-lg"
						>
							<div>{item}</div>
							<button
								onClick={() => handleDeleteTodo(item)}
								className="w-7 hover:scale-125 duration-200"
							>
								<img src={DeleteIcon}></img>
							</button>
						</li>
					))}
				</ul>
			) : (
				<div className="my-20 text-2xl text-center text-red-600">No todos!</div>
			)}
		</>
	);
};

export default TodoItems;
