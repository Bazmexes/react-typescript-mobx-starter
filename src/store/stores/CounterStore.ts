import { action, makeAutoObservable, observable } from 'mobx';

export default class CounterStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable count = 0;

  @action increment = () => {
    this.count = this.count + 1;
  };

  @action decrement = () => {
    this.count = this.count - 1;
  };
}
