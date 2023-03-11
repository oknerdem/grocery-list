import { useStore } from '@/context/store';
import Text from '@/components/text';

const Status = () => {
  const { status, data } = useStore();
  return (
    <>
      {status === 'filled' && data.length > 0 && (
        <Text intent="success">Item added to the list!</Text>
      )}
      {status === 'deleted' && (
        <Text intent="danger">Item deleted from the list!</Text>
      )}
      {status === 'reset' && (
        <Text intent="reset">All items deleted from the list!</Text>
      )}
      {status === 'edited' && (
        <Text intent="edit">You are now editing an item!</Text>
      )}
      {status === 'empty' && null}
    </>
  );
};

export default Status;
