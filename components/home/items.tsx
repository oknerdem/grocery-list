import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

const Items = () => {
  const { data, setData, setStatus } = useStore();
  const [parent] = useAutoAnimate<HTMLDivElement>();

  const deleteHandle = (id: number) => {
    setData(data.filter((item: any) => item.id !== id));
    setStatus('deleted');
  };

  const editHandle = (id: any) => {
    setStatus('edited');
    const item = data.find((item: any) => item.id === id);
    const form = document.querySelector('form');
    if (!form) return console.log('form not found');
    const inputText = form[0] as HTMLInputElement;
    const inputNum = form[1] as HTMLInputElement;
    inputText.value = item.name;
    inputNum.value = item.quantity;
    setData(data.filter((item: any) => item.id !== id));
  };

  return (
    <>
      <div
        className="overflow-auto m-auto w-full overflow-x-hidden"
        ref={parent}
      >
        {data?.map((item: any) => {
          const { name, quantity, id } = item;
          return (
            <div className={styles.itemsMain} key={id}>
              <span className="first-letter:uppercase">{name}</span>
              <span className="justify-center flex">x{quantity}</span>
              <div className="flex gap-2 justify-end">
                <button onClick={() => editHandle(id)}>
                  <FiEdit className={styles.itemsEdit} />
                </button>
                <button onClick={() => deleteHandle(id)}>
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
