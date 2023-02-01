import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

const Cart = () => {
  const { data } = useStore();

  return (
    <h2 className={styles.cartMain}>
      <MdOutlineLocalGroceryStore className="text-4xl" />
      <sup className={styles.cartNumber}>{data.length}</sup>
    </h2>
  );
};

export default Cart;
