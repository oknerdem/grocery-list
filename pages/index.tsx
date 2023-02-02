import { NextPage } from 'next';
import { useStore } from '@/context/store';
import Header from '@/components/header';
import Main from '@/components/main';

const Home: NextPage = () => {
  const { data } = useStore();
  const title = `Grocery 🍓 ${data?.length > 0 ? `(${data.length})` : ''}`;
  const content = 'A simple grocery list app';

  return (
    <>
      <Header title={title} content={content} />
      <Main />
    </>
  );
};

export default Home;
