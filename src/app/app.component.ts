import {Component} from '@angular/core';
import {Student} from '../module/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  student: Student = new Student('3', '张三', '李四', 23);

  constructor() {
    this.getTest();
  }


  getTest = () => {
    console.log('结果值', this.student.ageInYears(2018));
  }

}
