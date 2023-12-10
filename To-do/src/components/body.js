import { useState } from "react";
import TodoItems from "./TodoItems";

const Body = () => {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	const handleAddItem = () => {
		const items2 = items;
		items2.push(input);
		// console.log(items);
		setItems(items2);
		setInput("");
	};

	return (
		<div className="text-center w-full bg-slate-200 h-screen">
			<h1 className="font-bold text-2xl py-8">Todo App</h1>

			<input
				placeholder="Enter Item"
				value={input}
				className="border border-black p-2 w-1/3 rounded-lg"
				onChange={(e) => setInput(e.target.value)}
			></input>
			<div>
				<button
					onClick={handleAddItem}
					className="border border-black p-2 px-8 rounded-lg my-7 bg-white hover:scale-110 hover:bg-slate-400
				transition duration-150 "
				>
					ADD
				</button>
			</div>

			{/* <div>{<TodoItems items={items} />}</div> */}
			<div>
				{items.map((item) => (
					<TodoItems item={item} key={Math.floor(Math.random() * 10000) + 1} />
				))}
			</div>
		</div>
	);
};

export default Body;
