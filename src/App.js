import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Library from "./components/Library";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
	const [books, setBooks] = useState([]);

	const updateBook = (book, newShelf) => {
		const update = async () => {
			await BooksAPI.update(book, newShelf);

			if (!book.shelf) {
				book.shelf = newShelf;
				setBooks([...books, book]);
			} else {
				const newBooks = books.map((b) => {
					if (b.id === book.id) {
						b.shelf = newShelf;
					}
					return b;
				});
				setBooks(newBooks);
			}
		};

		update();
	};

	useEffect(() => {
		const getBooks = async () => {
			const books = await BooksAPI.getAll();
			setBooks(books);
		};
		getBooks();
	}, []);

	return (
		<div className="App">
			<h1>My Reads</h1>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Library books={books} handleUpdateBook={updateBook} />
					}
				/>
				<Route
					exact
					path="/search"
					element={
						<Search books={books} handleUpdateBook={updateBook} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
