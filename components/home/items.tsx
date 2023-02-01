import { FiEdit, FiTrash } from 'react-icons/fi';
import { useStore } from '@/context/store';

const Items = () => {
  const { data } = useStore();

  return (
    <>
      {data?.map((item: any) => {
        return (
          <div className="grid grid-cols-3 col-span-3 mt-6 px-4" key={item.id}>
            <span>{item.name}</span>
            <span className="justify-center flex">x{item.quantity}</span>
            <div className="flex gap-2 justify-end">
              <button className="text-xl text-green-500 hover:opacity-60 duration-150">
                <FiEdit />
              </button>
              <button>
                <FiTrash className="text-xl text-red-600 hover:opacity-60 duration-150" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Items;
