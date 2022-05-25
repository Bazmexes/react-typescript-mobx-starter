import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

export default class CounterStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist @observable count = 0;

  @action increment = () => {
    this.count = this.count + 1;
  };

  @action decrement = () => {
    this.count = this.count - 1;
  };
}
