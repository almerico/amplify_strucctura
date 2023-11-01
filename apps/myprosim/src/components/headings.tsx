interface WithChildren {
  children?: React.ReactNode;
}
export function H1({ children }: WithChildren) {
  return (
    <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {children}
    </h1>
  );
}
