import Head from 'next/head';
import { useEffect, useState } from 'react';
import Methamorphosis from '../components/Methamorphosis';
import styled from 'styled-components';

const Indicator = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div style={{ height: 4000 }}>
        <Indicator style={{ position: 'fixed', top: 160, left: 30 }}>
          {scrollY}
        </Indicator>
        <Methamorphosis
          style={{ position: 'fixed', top: 10 }}
          scroll={scrollY}
        />
      </div>
    </>
  );
}
