interface IconButtonProps {
  children: React.ReactNode;
}

export const IconButton = ({ children }: IconButtonProps) => {
  return (
    <button className="text-green-400 text-2xl rounded-full bg bg-[#333438] flex items-center justify-center w-10 h-10 transition-all hover:scale-110">
      {children}
    </button>
  );
};
