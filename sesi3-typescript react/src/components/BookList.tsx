import { Book } from '../Types';
import BookItem from './BookItem';

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="container py-3">
      <h2 className="text-center h4 mb-4">Programming Book List</h2>
      <div className="row g-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-4">
            <BookItem book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;