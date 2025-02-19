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
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
      
    },
    {
      "id": 2,
      "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
      "author": "Robert C. Martin",
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
    },
    {
      "id": 3,
      "title": "You Don't Know JS Yet: Scope & Closures",
      "author": "Kyle Simpson",
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
    },
    {
      "id": 4,
      "title": "JavaScript: The Good Parts",
      "author": "Douglas Crockford",
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
    },
    {
      "id": 5,
      "title": "Eloquent JavaScript",
      "author": "Marijn Haverbeke",
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
    },
    {
      "id": 6,
      "title": "Introduction to Algorithms",
      "author": "Thomas H. Cormen",
      "imageUrl": "https://pbs.twimg.com/media/GkFTt74X0AUnSYa?format=jpg&name=900x900"
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
