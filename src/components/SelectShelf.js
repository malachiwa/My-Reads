const SelectShelf = ({ handleUpdateBook, book }) => {
	const changeChelf = (e) => {
		handleUpdateBook(book, e.target.value);
	};

	return (
		<div className="select-wrapper">
			<select
				defaultValue={book.shelf}
				onChange={(e) => {
					changeChelf(e);
				}}
			>
				{!book.shelf && <option value="">None</option>}
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">read</option>
			</select>
		</div>
	);
};

export default SelectShelf;
