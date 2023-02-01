import { FiEdit, FiTrash } from 'react-icons/fi';
import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

const Items = () => {
  const { data } = useStore();

  return (
    <>
      {data?.map((item: any) => {
        return (
          <div className={styles.itemsMain} key={item.id}>
            <span>{item.name}</span>
            <span className="justify-center flex">x{item.quantity}</span>
            <div className="flex gap-2 justify-end">
              <button className={styles.itemsEdit}>
                <FiEdit />
              </button>
              <button>
                <FiTrash className={styles.itemsDel} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Items;
