import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit {
  myForm: FormGroup;
  clickAble: Boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({sku_group: ['', Validators.required], name_group: ['', Validators.required]});
  }

  ngOnInit() {
  }

  onSubmit = (value) => {
    this.clickAble = true;
    console.log(this.myForm);
  }
}
