import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-observables",
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  dataObserverManages;
  dataObserver: Observable<any> = Observable.create(function subscribe(observer) {
    let id = setTimeout(() => {
      // 通过create 创建 每次只能在这里面next 有局限性
      observer.next('dataObserverManages会2秒后就会出来了  通过create 创建 每次只能在这里面next 有局限性');
    }, 2000);
  });
  // subject 类型
  ddataSubscriptionManages;
  dataSubscription: Subject<any> = new Subject();
  // BehaviorSubject 类型 可以传参数
  dataBehaviorSubjectManages;
  dataBehaviorSubject = new BehaviorSubject("我new BehaviorSubject 类型 类型出来的值 可以传参数");
  // 数组类型
  goodsSubject = new BehaviorSubject([]);
  goodsList$ = this.goodsSubject.asObservable();
  // goodsList$ = this.dataSubscription.asObservable();

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
    console.log('当前路由=================》', this.route.url['value'][0]['path']);
    let subscription = this.dataObserver.subscribe((x) => {
      this.dataObserverManages = x;
    });

    setTimeout(() => subscription.unsubscribe(), 2100);

    let test1 = this.dataSubscription.subscribe((v) => {
      this.ddataSubscriptionManages = v;
    });
    // test1.unsubscribe();取消执行
    this.dataSubscription.next("我new Subject类型出来的值");
    let test2 = this.dataBehaviorSubject.subscribe((v) => {
      this.dataBehaviorSubjectManages = v;
    });
    // test2.unsubscribe();取消执行
    this.goodsSubject.next([1, 2, 3, 4]);
    let test = this.goodsSubject.subscribe((v) => {
      console.log(v);
    });
    // test.unsubscribe();取消执行
  }

}
