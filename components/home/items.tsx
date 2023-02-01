import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

const Items = () => {
  const { data, setData, setStatus } = useStore();
  const [parent] = useAutoAnimate<HTMLDivElement>();

  // const editHandle = (id: number) => {
  //   setStatus('edited');
  // };

  const deleteHandle = (id: number) => {
    setData(data.filter((item: any) => item.id !== id));
    setStatus('deleted');
  };

  return (
    <>
      <div
        className="overflow-auto m-auto w-full overflow-x-hidden"
        ref={parent}
      >
        {data?.map((item: any) => {
          return (
            <div className={styles.itemsMain} key={item.id}>
              <span>{item.name}</span>
              <span className="justify-center flex">x{item.quantity}</span>
              <div className="flex gap-2 justify-end">
                <button className={styles.itemsEdit}>
                  <FiEdit />
                </button>
                <button onClick={() => deleteHandle(item.id)}>
                  <FiTrash className={styles.itemsDel} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
