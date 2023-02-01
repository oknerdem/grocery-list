import { SubmitButton } from '@/components/buttons';

const Form = () => {
  return (
    <form
      className="flex justify-center gap-2"
      onClick={(e: any) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="bg-blue-100 p-2 rounded w-full focus:outline-none placeholder:select-none"
        placeholder="e.g. yogurt"
      />
      <input
        type="number"
        className="w-[4.7rem] rounded bg-white shadow border border-zinc-300 p-2 focus:outline-none text-center focus:placeholder:opacity-0 placeholder:select-none"
        min={1}
        max={100}
        placeholder="1"
        title="default value is 1"
      />
      <SubmitButton text="Submit" />
    </form>
  );
};

export default Form;
