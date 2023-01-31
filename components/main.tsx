import styles from '@/styles/Home.module.css';

const Main = () => {
  const title = 'Grocery List';

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
    </main>
  );
};

export default Main;
