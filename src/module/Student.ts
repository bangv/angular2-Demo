/**
 * Created by xbw on 2018/8/13.
 */
import {Person} from './Pesrson';
export class Student extends Person {
  ID: string;

  constructor(id: string, first_name: string, last_name: string, age: number) {
    super(first_name, last_name, age);
    this.ID = id;
  }

  ageInYears = (year: number) => {
    return year;
  }
}
