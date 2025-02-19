import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import { Book } from './Types';

function App() {
  const [books] = useState<Book[]>([
    {
      "id": 1,
      "title": "The Pragmatic Programmer",
      "author": "Andrew Hunt and David Thomas",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
      
    },
    {
      "id": 2,
      "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
      "author": "Robert C. Martin",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
    },
    {
      "id": 3,
      "title": "You Don't Know JS Yet: Scope & Closures",
      "author": "Kyle Simpson",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
    },
    {
      "id": 4,
      "title": "JavaScript: The Good Parts",
      "author": "Douglas Crockford",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
    },
    {
      "id": 5,
      "title": "Eloquent JavaScript",
      "author": "Marijn Haverbeke",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
    },
    {
      "id": 6,
      "title": "Introduction to Algorithms",
      "author": "Thomas H. Cormen",
      "imageUrl": "https://www.publishcentral.com.au/wp-content/uploads/2023/05/book-pile-of-must-read-books-scaled1.jpeg"
    }
  ]);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 bg-light">
        <BookList books={books} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
