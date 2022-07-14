import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Library = ({ books, handleUpdateBook }) => {
	return (
		<div>
			<Shelf
				handleUpdateBook={handleUpdateBook}
				name={"Currently Reading"}
				listBooks={books.filter((book) => {
					return book.shelf === "currentlyReading";
				})}
			/>
			<Shelf
				handleUpdateBook={handleUpdateBook}
				name={"Want to Read"}
				listBooks={books.filter((book) => {
					return book.shelf === "wantToRead";
				})}
			/>
			<Shelf
				handleUpdateBook={handleUpdateBook}
				name={"Read"}
				listBooks={books.filter((book) => {
					return book.shelf === "read";
				})}
			/>
			<Link className="go-to-search" to="/search">+</Link>
		</div>
	);
};

export default Library;
