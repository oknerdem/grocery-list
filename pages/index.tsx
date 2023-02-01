import { NextPage } from 'next';
import Header from '@/components/header';
import Main from '@/components/main';

const Home: NextPage = () => {
  const title = 'Grocery';
  const content = 'A simple grocery list app';

  return (
    <>
      <Header title={title} content={content} />
      <Main />
    </>
  );
};

export default Home;
