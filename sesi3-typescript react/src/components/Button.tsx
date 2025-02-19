interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }
  
  const Button = ({ onClick, children }: ButtonProps) => {
    return (
      <button 
        onClick={onClick} 
        className="btn btn-primary btn-sm px-3"
      >
        {children}
      </button>
    );
  };
  
  export default Button;