import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shelf from "./Shelf";
import { search, get } from "../BooksAPI";

const Search = ({ handleUpdateBook }) => {
	const [query, setQuery] = useState("");
	const [resultBooks, setResultBooks] = useState([]);

	const changeQuery = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		const getBooks = async () => {
			const resBooks = await search(query, 1000);

			const calc = async (book) => {
				return await get(book.id);
			};

			const asyncFunc = async () => {
				const unresolvedPromises = resBooks.map((book) => calc(book));
				const results = await Promise.all(unresolvedPromises);
				setResultBooks(results);
			};

			resBooks.length > 0 ? asyncFunc() : setResultBooks([]);
		};

		query.length === 0 ? setResultBooks([]) : getBooks();

	}, [query]);

	return (
		<div>
			<Link to="/">Back</Link>
			<h2>Search</h2>
			<input onChange={(e) => changeQuery(e)} />
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
