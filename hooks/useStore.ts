import { useContext } from 'react';

import { StoreContext } from '@/store/StoreProvider';
import AppStore from '@/store/AppStore';

export default function useStore(): AppStore {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }
  // @ts-ignore
  return context;
}
