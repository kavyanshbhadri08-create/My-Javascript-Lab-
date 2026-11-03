// Name: Kavyansh Bhadri | Roll Number: 2510303259 | Assignment: 7, Task: 2
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  summary() {
    return `${this.title} has ${this.pages} pages`;
  }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());
