import { createContext } from 'react';

import Store from './AppStore';

let store: any;
export const StoreContext = createContext({});

function initializeStore(initialData = null) {
  const _store = store ?? new Store();

  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function StoreProvider({ children, initialState: initialData }: any) {
  const store = initializeStore(initialData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
