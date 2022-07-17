import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Shelf from "./Shelf";
import { search } from "../BooksAPI";
import useDebounce from "../useDebounce";

const Search = ({ books, handleUpdateBook }) => {
	const [query, setQuery] = useState("");
	const [resultBooks, setResultBooks] = useState([]);
	const [error, setError] = useState(false);

	const debouncedValue = useDebounce(query, 500);

	const changeQuery = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		const getBooks = async () => {
			const resBooks = await search(debouncedValue, 1);

			if (resBooks.length > 0) {
				setError(false);
				const arr = resBooks.map((book) => {
					const replaseRes = books.filter((b) => {
						return b.id === book.id ? true : false;
					});
					return replaseRes.length === 1 ? replaseRes[0] : book;
				});
				setResultBooks(arr);
			} else {
				setError(true);
				setResultBooks([]);
			}
		};

		debouncedValue.length === 0 ? setResultBooks([]) : getBooks();
	}, [debouncedValue, books]);

	return (
		<div>
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Back
				</Link>
				<input
					placeholder="Search by title, author, or ISBN"
					onChange={(e) => changeQuery(e)}
				/>
			</div>
			{resultBooks.length > 0 ? (
				<Shelf
					listBooks={resultBooks}
					handleUpdateBook={handleUpdateBook}
				/>
			) : error ? (
				<div className="books-not-found">Books not found :/</div>
			) : (
				""
			)}
		</div>
	);
};

Search.prototypes = {
	handleUpdateBook: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
}

export default Search;
