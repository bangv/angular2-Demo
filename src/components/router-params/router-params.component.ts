import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-router-params',
  templateUrl: './router-params.component.html',
  styleUrls: ['./router-params.component.css']
})
export class RouterParamsComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
  }

  routerParams: any;

  ngOnInit() {
    console.log(this.route)
    console.log('当前路由=================》', this.route.url['value'][0]['path']);
   this.routerParams = this.route.params['value'].id;
  }

}
