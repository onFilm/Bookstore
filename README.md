This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `json-server --watch db.json -p 3001`

Runs the JSON server for storing the book data.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

1. Book Store Application

The proposed system provides a way to manage the inventory of books in a book store. The user interface to the system is implemented using a client side JavaScript library (React). The data for Books is managed in a JSON server. The client application interface communicate with the JSON Server through http to retrieve and store data. To make the user interface better, Bootstrap is used.

Following operations should be supported.

1) View Books

2) Add Book

3) Update Book

4) Delete Book

View Books

* The list of books available should be displayed.

* There should be a search filter option provided to display only a subset of the books based on the search filter. 

* Buttons should be displayed next to each book entry to allow delete of a book.

* Title is displayed as link and user is allowed to click on the link and Update the book info.

Add Book

While adding the book, the following input details should be accepted.

* Title

* Author

* ISBN

* Publication Date

* Publisher

* Price

* Genre (A list of Genres should be displayed for user to select)

* Format (A list of format should be displayed for user to select)

Update Book

When the list of books are displayed, one book can be selected to update at a time.

Title, Author, ISBN, Publication Date, Publisher, Price, Genre and Format should be allowed to be updated.

Note: Book ID should be used as the key to look for Book details and it cannot be modified.

Delete Book

When the list of books are displayed, Delete button is displayed in the table to delete a book at a time.
