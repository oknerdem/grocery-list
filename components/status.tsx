import { useStore } from '@/context/store';

const Status = () => {
  const { status, data } = useStore();
  return (
    <>
      {status === 'filled' && data.length > 0 && (
        <div className="bg-green-200 p-1 text-center rounded text-green-700 select-none">
          Item added to the list!
        </div>
      )}
      {status === 'deleted' && (
        <div className="bg-rose-200 p-1 text-center rounded text-rose-700 select-none">
          Item deleted from the list!
        </div>
      )}
      {status === 'reset' && (
        <div className="bg-gray-200 p-1 text-center rounded text-gray-700 select-none">
          All items deleted from the list!
        </div>
      )}
      {status === 'edited' && (
        <div className="bg-yellow-200 p-1 text-center rounded text-yellow-700 select-none">
          Item edited from the list!
        </div>
      )}
      {status === 'empty' && null}
    </>
  );
};

export default Status;
