import { Book } from '../Types';
import BookItem from './BookItem';

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    // <div className="container py-3">
    //   <h2 className="text-center h4 mb-4">Programming Book List</h2>
    //   <div className="row g-4">
    //     {books.map((book) => (
    //       <div key={book.id} className="col-md-4">
    //         <BookItem book={book} />
    //       </div>
    <div className="container mx-auto px-4 py-3">
      <h2 className="text-center text-lg mb-4 font-semibold text-rose-900 font-mono">Programming Book List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id}>
            <BookItem book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;