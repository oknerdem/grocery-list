import Header from '@/components/header';
import Main from '@/components/main';

export default function Home() {
  const title = 'Grocery List';
  const content = 'A simple grocery list app';

  return (
    <>
      <Header title={title} content={content} />
      <Main />
    </>
  );
}
