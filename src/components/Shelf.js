import PropTypes from 'prop-types';
import Book from "./Book";

const Shelf = ({ name, listBooks, handleUpdateBook }) => {
	return (
		<div className="shelf">
			{name && (<h3>{name}</h3>)}
			<div className="list-books">
				{listBooks.length > 0 && listBooks.map((book) => (
					<Book key={book.id} book={book} handleUpdateBook={handleUpdateBook}/>
				))}
			</div>
		</div>
	);
};

Shelf.propTypes = {
	name: PropTypes.string,
	listBooks: PropTypes.array,
	handleUpdateBook: PropTypes.func.isRequired
}

export default Shelf;
