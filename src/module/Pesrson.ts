/**
 * Created by xbw on 2018/8/13.
 */

export class Person {
  first_name: string;
  last_name: string;
  age: number;

  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }


  ageInYears = (years: number): number => {
    return years;
  }
}
