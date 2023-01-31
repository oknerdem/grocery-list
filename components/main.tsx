import { FiEdit, FiTrash } from 'react-icons/fi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import styles from '@/styles/Home.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainBox}>
        <div className="bg-green-200 p-1 text-center rounded text-green-700 select-none">
          Your item added to the list!
        </div>
        {/* <div className="bg-red-200 p-1 text-center rounded text-red-700">
          Your item removed from the list!
        </div> */}
        <h2 className="text-2xl font-bold flex items-center justify-center">
          <MdOutlineLocalGroceryStore className="text-4xl" />
          <sup className="text-xs rounded-full bg-red-500 px-1.5 -ml-4 mb-3 text-white py-[1px] select-none">
            1
          </sup>
        </h2>
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
            className="w-fit rounded bg-white shadow border border-zinc-300 p-2 focus:outline-none text-center focus:placeholder:opacity-0 placeholder:select-none"
            min={1}
            max={100}
            placeholder="1"
            title="default value is 1"
          />
          <button
            type="submit"
            className="bg-blue-600 text-blue-100 p-2 rounded w-20 hover:opacity-80 duration-150 select-none"
          >
            Submit
          </button>
        </form>
        <div className="grid grid-cols-3 col-span-3 mt-6 px-4">
          <span>Eggs</span>
          <span className="justify-center flex">x12</span>
          <div className="flex gap-2 justify-end">
            <button className="text-xl text-green-500 hover:opacity-60 duration-150">
              <FiEdit />
            </button>
            <button>
              <FiTrash className="text-xl text-red-600 hover:opacity-60 duration-150" />
            </button>
          </div>
        </div>
        <div className="flex items-end h-full">
          <button className="mt-8 bg-red-600 text-red-100 max-w-xs mx-auto w-36 py-2 rounded-md focus:outline-none hover:opacity-80 duration-150 select-none">
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
