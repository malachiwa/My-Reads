import SelectShelf from "./SelectShelf";

const Book = ({ book, handleUpdateBook }) => {
	return (
		<div className="book" id={book.id}>
			{book.imageLinks && book.imageLinks.smallThumbnail && <img src={book.imageLinks.smallThumbnail} alt={book.title} />}
			<div className="book-data">
				<h4>{book.title}</h4>
				{book.authors && (
					<div className="book-authors">
						{book.authors.map((author, index) => {
							return <p key={index}>{author}</p>;
						})}
					</div>
				)}
			</div>
			<SelectShelf book={book} handleUpdateBook={handleUpdateBook} />
		</div>
	);
};

export default Book;
