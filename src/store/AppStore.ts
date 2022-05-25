import { create } from 'mobx-persist';
import { enableStaticRendering } from 'mobx-react-lite';

import CounterStore from '@/store/stores/CounterStore';

enableStaticRendering(typeof window === 'undefined');

const hydrate = create({});

export default class AppStore {
  counterStore = new CounterStore();

  constructor() {
    if (typeof window !== 'undefined') {
      hydrate(`counterStore`, this.counterStore); // if need hydrate
    }
  }
}
