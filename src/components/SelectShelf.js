import PropTypes from 'prop-types';

const SelectShelf = ({ handleUpdateBook, book }) => {
	const changeChelf = (e) => {
		handleUpdateBook(book, e.target.value);
	};

	const shelves = [
		{
			id: "2",
			shelfName: "currentlyReading",
			shelfDisplayName: "Currently Reading",
		},
		{
			id: "3",
			shelfName: "wantToRead",
			shelfDisplayName: "Want to Read",
		},
		{
			id: "4",
			shelfName: "read",
			shelfDisplayName: "Read",
		},
	];

	if (!book.shelf) {
		shelves.unshift({
			id: "1",
			shelfName: "none",
			shelfDisplayName: "None",
		});
	}

	return (
		<div className="select-wrapper">
			<select
				defaultValue={book.shelf}
				onChange={(e) => {
					changeChelf(e);
				}}
			>
				{shelves.map((shelf) => {
					return <option key={shelf.id} value={shelf.shelfName}>{shelf.shelfDisplayName}</option>;
				})}
			</select>
		</div>
	);
};

SelectShelf.prototypes = {
	handleUpdateBook: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired
}

export default SelectShelf;
