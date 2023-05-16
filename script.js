function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	}
}
let myLibrary = []

function addBookToLibrary(){
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author of the book?');
    let pages = prompt('How many pages does this book have?');
    let read = prompt('Have you read this book?');
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary()
console.log(myLibrary)





//const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, "Read");
//console.log(book1.info()); // Output: "The Great Gatsby by F. Scott Fitzgerald, 218 pages, Read"

