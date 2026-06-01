export const Button = ({ children }) => {
  return (
    <button
      className="flex flex-row text-primary gap-2 px-16 py-3 items-center
        border border-primary rounded-lg hover:opacity-[0.5]"
    >
      {children}
    </button>
  );
};
