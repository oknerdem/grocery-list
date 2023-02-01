import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { useStore } from '@/context/store';

const Cart = () => {
  const { data } = useStore();

  return (
    <h2 className="text-2xl font-bold flex items-center justify-center">
      <MdOutlineLocalGroceryStore className="text-4xl" />
      <sup className="text-xs rounded-full bg-red-500 px-1.5 -ml-4 mb-3 text-white py-[1px] select-none">
        {data.length}
      </sup>
    </h2>
  );
};

export default Cart;
