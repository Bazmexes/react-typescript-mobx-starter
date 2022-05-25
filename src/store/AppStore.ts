import { create } from 'mobx-persist';
import { enableStaticRendering } from 'mobx-react-lite';

import CounterStore from '@/store/stores/CounterStore';
import TestStore from '@/store/stores/TestStore';

enableStaticRendering(typeof window === 'undefined');

const hydrate = create({});

export default class AppStore {
  counterStore = new CounterStore();
  testStore = new TestStore();

  constructor() {
    if (typeof window !== 'undefined') {
      hydrate(`counterStore`, this.counterStore); // if need hydrate
    }
  }
}
