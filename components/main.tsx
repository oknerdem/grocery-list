import { useStore } from '@/context/store';
import { ResetButton } from '@/components/buttons';
import Cart from '@/components/home/cart';
import Form from '@/components/home/form';
import Items from '@/components/home/items';
import Status from '@/components/status';
import styles from '@/styles/Home.module.css';

const Main = () => {
  const resetButtonText = 'Reset';

  const { setData, setStatus, data } = useStore();

  const handleReset = () => {
    setData([]);
    setStatus('reset');

    setTimeout(() => {
      setStatus('empty');
    }, 3000);
  };

  return (
    <main className={styles.main}>
      <section className={styles.mainBox}>
        <Status />
        <Cart />
        <Form />
        <Items />
        <ResetButton text={resetButtonText} onClick={handleReset} />
      </section>
    </main>
  );
};

export default Main;
