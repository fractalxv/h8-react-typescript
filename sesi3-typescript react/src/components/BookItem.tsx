import { Book } from '../Types';
import Button from './Button';

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    // <div className="bg-white p-3 rounded">
    //   <img 
    //     src={book.imageUrl} 
    //     alt={book.title}
    //     className="w-100 mb-2"
    //     style={{ height: '200px', objectFit: 'cover' }}
    //   />
    //   <h5 className="h6 mb-1">{book.title}</h5>
    //   <p className="text-muted small mb-2">by {book.author}</p>
    //   <Button onClick={() => alert(`Reading ${book.title}`)}>
    //     Read More
    <div className="bg-white p-3 rounded shadow-sm">
    <img 
      src={book.imageUrl} 
      alt={book.title}
      className="w-full mb-2 h-[200px] object-cover"
    />
    <h5 className="text-sm font-medium mb-1">{book.title}</h5>
    <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
    <Button onClick={() => alert(`Reading ${book.title}`)}>
      Read More
      </Button>
    </div>
  );
};

export default BookItem;