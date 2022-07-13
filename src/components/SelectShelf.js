const SelectShelf = ({ handleUpdateBook, book }) => {

    const changeChelf = (e) => {
        handleUpdateBook(book, e.target.value);
    }

    return (
            <select defaultValue={book.shelf} onChange={(e) => {changeChelf(e)}}>
                {book.shelf === 'none' ? <option value="">None</option> : ''}
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">read</option>
            </select>
    );
};

export default SelectShelf;