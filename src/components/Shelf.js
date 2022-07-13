import Book from "./Book";

const Shelf = ({ name, listBooks, handleUpdateBook }) => {
	return (
		<div>
			{name && (<h3>{name}</h3>)}
			<div className="list-books">
				{listBooks.length > 0 && listBooks.map((book) => (
					<Book key={book.id} book={book} handleUpdateBook={handleUpdateBook}/>
				))}
			</div>
		</div>
	);
};

export default Shelf;
