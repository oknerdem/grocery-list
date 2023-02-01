import Head from 'next/head';

import { useStore } from '@/context/store';

interface HeaderProps {
  title: string;
  content: string;
}

const Header = ({ title, content }: HeaderProps) => {
  const { data } = useStore();
  return (
    <Head>
      <title>
        {title} 🍓 {data.length}
      </title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/grocery.png" />
    </Head>
  );
};

export default Header;
