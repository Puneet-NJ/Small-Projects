import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body";

const App = () => {
	return (
		<div className="">
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
