interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }
  
  const Button = ({ onClick, children }: ButtonProps) => {
    return (
      <button 
        className="bg-rose-300 hover:bg-rose-400 text-white px-4 py-1 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-100 font-mono"
        onClick={() => alert('test')}
        // className="btn btn-primary btn-sm px-3"
      >
        {children}
      </button>
    );
  };
  
  export default Button;