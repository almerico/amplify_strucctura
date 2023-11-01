interface WithChildren {
  children?: React.ReactNode;
}

interface ButtonProps extends WithChildren {
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export function PrimaryButton({
  href,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const theHref = href && href.length > 0 ? href : "#";

  if (disabled !== undefined && disabled !== null && disabled) {
    return (
      <span
        className="py-2.5 px-3.5 text-sm font-semibold rounded-md shadow-sm bg-grey-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        {...props}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={theHref}
      className="py-2.5 px-3.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...props}
    >
      {children}
    </a>
  );
}
export function FirstGroupButton({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex relative items-center py-2 px-3 text-sm font-semibold text-gray-900 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 focus:z-10 ring-gray-300hover:bg-gray-50 mr-[2px]"
      {...props}
    >
      {children}
    </button>
  );
}
export function MiddleGroupButton({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex relative items-center py-2 px-3 -ml-px text-sm font-semibold text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-[2px]"
      {...props}
    >
      {children}
    </button>
  );
}
export function LastGroupButton({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex relative items-center py-2 px-3 -ml-px text-sm font-semibold text-gray-900 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-[2px]"
      {...props}
    >
      {children}
    </button>
  );
}
