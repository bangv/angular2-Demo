import {Component, OnInit} from '@angular/core';
import {Http, RequestMethod, RequestOptions} from '@angular/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  data: object = new Object;
  http: Http;

  constructor(http: Http, public route: ActivatedRoute) {
    this.http = http;
  }
  ngOnInit() {
    console.log(this.route);
    console.log('当前路由=================》', this.route.url['value'][0]['path']);
  }

  onSubmit = (value) => {
    let test = 333;
    // let options = new RequestOptions({
    //   method: 'GET',
    //   url: 'https://www.baidu.com/',
    //   headers: new Headers({'Content-Type': 'application/json'}),
    // });
    // this.http.request('', options).subscribe((res) => {
    //   console.log(99999);
    // });
    console.log(test);
    this.data = value;
    console.log('data', this.data);
  }

}
