const Heart = ({ filled, onClick }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="heart absolute min-sm:top-3 right-3 sm:bottom-3"
        onClick={onClick}
      >
        <path
          fill="#FFFFFF"
          stroke="currentColor"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.68 0L12 5.65l-1.16-1.04a5.5 5.5 0 0 0-7.68 7.87l1.2 1.2L12 21l7.64-7.64 1.2-1.2a5.5 5.5 0 0 0 0-7.75z"
        />
        {filled && (
          <path
            fill="#000000"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.68 0L12 5.65l-1.16-1.04a5.5 5.5 0 0 0-7.68 7.87l1.2 1.2L12 21l7.64-7.64 1.2-1.2a5.5 5.5 0 0 0 0-7.75z"
          />
        )}
      </svg>
    );
  };
  
  export default Heart;