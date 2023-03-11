import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useStore } from '@/context/store';
import Text from '@/components/text';
import Button from '@/components/button';
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
              <Text isUpperCase="first">{name}</Text>

              <Text isBlock={false} isFlex="center">
                x{quantity}
              </Text>

              <Text isFlex="end" gap={2}>
                <Button onClick={() => editHandle(id)}>
                  <FiEdit className={styles.itemsEdit} />
                </Button>

                <Button onClick={() => deleteHandle(id)}>
                  <FiTrash className={styles.itemsDel} />
                </Button>
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
