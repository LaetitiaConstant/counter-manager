const Counters = ({ counters, index, Increment, Decrement }) => {
	return (
		<div className="counters">
			<button
				onClick={() => {
					Decrement(index);
				}}
			>
				-
			</button>
			<p>{counters}</p>
			<button
				onClick={() => {
					Increment(index);
				}}
			>
				+
			</button>
		</div>
	);
};

export default Counters;
