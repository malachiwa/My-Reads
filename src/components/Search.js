import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shelf from "./Shelf";
import { search } from "../BooksAPI";

const Search = ({ books, handleUpdateBook }) => {
	const [query, setQuery] = useState("");
	const [resultBooks, setResultBooks] = useState([]);

	const changeQuery = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		const getBooks = async () => {
			const resBooks = await search(query, 1);

			if (resBooks.length > 0) {
				const arr = resBooks.map((book) => {
					const replaseRes = books.filter((b) => {
						return b.id === book.id ? true : false;
					});
					return replaseRes.length === 1 ? replaseRes[0] : book;
				});
				setResultBooks(arr);
			} else {
				setResultBooks([]);
			}

			//old solution:
			// const calc = async (book) => {
			// 	return await get(book.id);
			// };

			// const asyncFunc = async () => {
			// 	const unresolvedPromises = resBooks.map((book) => calc(book));
			// 	const results = await Promise.all(unresolvedPromises);
			// setResultBooks(results);
			// };

			// resBooks.length > 0 ? asyncFunc() : setResultBooks([]);
		};

		query.length === 0 ? setResultBooks([]) : getBooks();
	}, [query, books]);

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
			{resultBooks.length > 0 && (
				<Shelf
					listBooks={resultBooks}
					handleUpdateBook={handleUpdateBook}
				/>
			)}
		</div>
	);
};

export default Search;
