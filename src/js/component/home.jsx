import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [list, setList] = useState([]);

	const addTask = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			setList([...list, inputValue]);
			setInputValue('');
		}
	}

	const deleteTask = (indexToRemove) => {
		const newList = list.filter((_, index) => index !== indexToRemove);
		setList(newList);
	};
	
	return (
		<div className="container w-25 my-5">
			<h1 className="text-center">To do list</h1>
			<ul className="list-group">

				<input className="list-group-item w-100"
					type="text"
					placeholder="Add a task"
					onChange={event => setInputValue(event.target.value)}
					value={inputValue}
					onKeyDown={addTask}
				/>
				{list.map((item, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
						{item}
						<i className="fas fa-trash" onClick={() => deleteTask(index)}></i>
					</li>
				))}
			</ul>
			<div>{list.length} item left</div>
		</div>
	);
};

export default Home;
