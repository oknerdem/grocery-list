import { FiEdit, FiTrash } from 'react-icons/fi';
import styles from '@/styles/Home.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainBox}>
        <div className="bg-green-200 p-1 text-center rounded text-green-700">
          Your item added to the list!
        </div>
        {/* <div className="bg-red-200 p-1 text-center rounded text-red-700">
          Your item removed from the list!
        </div> */}
        <h2 className="text-center text-2xl font-bold">Grocery Bud</h2>
        <form
          className="flex justify-center gap-2"
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="bg-blue-100 p-2 rounded w-full focus:outline-none"
            placeholder="e.g. yogurt"
          />
          <button
            type="submit"
            className="bg-blue-600 text-blue-100 p-2 rounded w-20 hover:opacity-80 duration-150"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-between mt-6 px-4">
          <span>Eggs</span>
          <div className="flex gap-2">
            <button className="text-xl text-green-500 hover:opacity-60 duration-150">
              <FiEdit />
            </button>
            <button>
              <FiTrash className="text-xl text-red-600 hover:opacity-60 duration-150" />
            </button>
          </div>
        </div>
        <div className="flex items-center h-full">
          <button className="mt-8 bg-red-600 text-red-100 max-w-xs mx-auto w-36 py-2 rounded-md focus:outline-none hover:opacity-80 duration-150">
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;