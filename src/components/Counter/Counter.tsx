import { observer } from 'mobx-react-lite';

import useStore from '../../../hooks/useStore';

const Counter = () => {
  const {
    counterStore: { count, increment, decrement },
  } = useStore();

  return (
    <div className={'test'}>
      <button onClick={decrement}>минус</button>
      <p>{count}</p>
      <button onClick={increment}>плюс</button>
    </div>
  );
};

export default observer(Counter);
