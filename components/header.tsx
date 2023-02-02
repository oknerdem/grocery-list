import { useStore } from '@/context/store';
import Head from 'next/head';

interface HeaderProps {
  title: string;
  content: string;
}

const Header = ({ title, content }: HeaderProps) => {
  const { data } = useStore();
  const itemCount = data.length > 0 ? `( ${data.length} )` : '';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/grocery.png" />
    </Head>
  );
};

export default Header;
