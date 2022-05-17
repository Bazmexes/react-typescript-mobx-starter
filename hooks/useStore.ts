import { useContext } from 'react';
import {StoreContext} from "../src/store/StoreProvider";

export default function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}
