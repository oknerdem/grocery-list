interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ResetButton = ({ text, ...rest }: ButtonProps) => {
  return (
    <div className="flex">
      <button
        className="mt-6 bg-red-600 text-red-100 max-w-xs mx-auto w-36 py-2 rounded-md focus:outline-none hover:opacity-80 duration-150 select-none"
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

const SubmitButton = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-blue-600 text-blue-100 p-2 rounded w-20 hover:opacity-80 duration-150 select-none"
      {...rest}
    >
      {text}
    </button>
  );
};

export { ResetButton, SubmitButton };
