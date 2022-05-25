import type { NextPage } from 'next';
import { useEffect } from 'react';

import useStore from '@/hooks/useStore';
import Counter from '@/components/pages/index/Counter/Counter';

const Home: NextPage = () => {
  const {
    testStore: { fetchPeople },
  } = useStore();

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <Counter />
    </>
  );
};

export default Home;
