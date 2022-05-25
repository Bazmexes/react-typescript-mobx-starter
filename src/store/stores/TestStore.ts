import { action, makeAutoObservable, observable } from 'mobx';

import TestService from '@/api/services/TestService';
import { TypeStarWarsPeople } from '@/types/TestTypes';

const { getPeople } = TestService;

export default class TestStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable people: TypeStarWarsPeople[] = [];

  @action setPeople = (people: TypeStarWarsPeople[]) => {
    this.people = people;
  };

  @action fetchPeople = () => {
    getPeople().then((res) => {
      console.log(res);
    });
  };
}
