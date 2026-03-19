type ShowButtonProps = {
  onClick: () => void;
};

export function ShowButton({ onClick }: ShowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-md bg-black py-2 text-white transition hover:opacity-90"
    >
      ↻
    </button>
  );
}
