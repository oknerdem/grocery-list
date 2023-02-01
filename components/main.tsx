import { useEffect } from 'react';
import { useStore } from '@/context/store';
import { ResetButton } from './buttons';
import Cart from '@/components/home/cart';
import Form from '@/components/home/form';
import Items from '@/components/home/items';
import styles from '@/styles/Home.module.css';

const Main = () => {
  const { setData } = useStore();
  const resetButtonText = 'Reset';

  useEffect(() => {
    setData([
      {
        id: 1,
        name: 'Eggs',
        quantity: 12,
      },
      {
        id: 2,
        name: 'Milk',
        quantity: 4,
      },
      {
        id: 3,
        name: 'Bread',
        quantity: 1,
      },
      {
        id: 4,
        name: 'Butter',
        quantity: 2,
      },
    ]);
  }, [setData]);

  return (
    <main className={styles.main}>
      <section className={styles.mainBox}>
        <div className="bg-green-200 p-1 text-center rounded text-green-700 select-none">
          Your item added to the list!
        </div>
        {/* <div className="bg-red-200 p-1 text-center rounded text-red-700">
          Your item removed from the list!
        </div> */}
        <Cart />
        <Form />
        <Items />
        <ResetButton text={resetButtonText} />
      </section>
    </main>
  );
};

export default Main;
