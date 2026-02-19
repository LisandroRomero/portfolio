type Props = {
    children: React.ReactNode;
  };
  
  export default function Card({ children }: Props) {
    return (
      <div
        className="
          bg-card
          border-2 border-accent
          rounded-card
          shadow-card
          p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-cardHover
          hover:border-accent-hover
        "
      >
        {children}
      </div>
    );
  }
  