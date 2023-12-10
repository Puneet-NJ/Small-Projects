import { useState } from "react";
import deleteIcon from "../../images/deleteIcon.png";
// import App from "../";

const TodoItems = ({ item }) => {
	const [taskCompleted, setTaskCompleted] = useState(false);

	const handleTaskCompleted = () => {
		setTaskCompleted(!taskCompleted);
	};

	return (
		// <div className="my-8 w-6/12 mx-auto">
		<div className="my-8 w-6/12 mx-auto bg-slate-300 p-3 rounded-md flex justify-between px-10">
			<div className="flex items-center text-lg">
				<input
					type="checkbox"
					className="cursor-pointer"
					onChange={handleTaskCompleted}
					checked={taskCompleted}
				></input>
				{taskCompleted ? (
					<div className="mx-4 text-gray-100">{item}</div>
				) : (
					<div className="mx-4">{item}</div>
				)}
			</div>
			<img src={deleteIcon} className="w-8 cursor-pointer"></img>
		</div>
		// </div>
	);
};

export default TodoItems;
