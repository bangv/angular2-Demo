import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit {
  myForm: FormGroup;
  clickAble: Boolean = false;

  constructor(fb: FormBuilder, public route: ActivatedRoute) {
    this.myForm = fb.group({sku_group: ['', Validators.required], name_group: ['', Validators.required]});
  }

  ngOnInit() {
    console.log(this.route);
    console.log('当前路由=================》', this.route.url['value'][0]['path']);
  }

  onSubmit = (value) => {
    this.clickAble = true;
    console.log(this.myForm);
  }
}
