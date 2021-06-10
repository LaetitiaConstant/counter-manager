import "./App.css";
import { useState, useRef } from "react";
import Counters from "./Counters";

function App() {
	let curseurRef = useRef();

	const MousePosition = (event) => {
		curseurRef.current.setAttribute(
			"style",
			`top:${event.pageY - 10}px; left:${event.pageX - 10}px`
		);
	};

	const [counter, setCounter] = useState([0, 1]);

	const AddCounter = () => {
		const newCounter = [...counter];
		newCounter.push(0);
		setCounter(newCounter);
	};

	const Decrement = (index) => {
		if (counter[index] > 0) {
			const newCounter = [...counter];
			newCounter[index]--;
			setCounter(newCounter);
		}
	};

	const Increment = (index) => {
		const newCounter = [...counter];
		newCounter[index]++;
		setCounter(newCounter);
	};

	return (
		<div className="App" onMouseMove={MousePosition}>
			<div className="container-animation">
				<h1 class="txt">- COUNTER - MANAGER - COUNTER - MANAGER&nbsp;</h1>
				<h1 class="txt">- COUNTER - MANAGER - COUNTER - MANAGER&nbsp;</h1>
			</div>

			<div className="container">
				<div ref={curseurRef} className="curseur"></div>
				{counter.map((counters, index) => {
					return (
						<Counters
							key={index}
							counters={counters}
							index={index}
							Increment={Increment}
							Decrement={Decrement}
						/>
					);
				})}
			</div>
			<div className="container button">
				<div className="add-counter-button" onClick={AddCounter}>
					<div className="button-counter-text">Add Counter</div>
				</div>
				{/* <div class="half-circle"></div> */}
			</div>
		</div>
	);
}

export default App;
