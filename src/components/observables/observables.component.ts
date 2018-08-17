import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

  constructor() {
  }

  ngOnInit() {
    let subscription = this.dataObserver.subscribe((x) => {
      this.dataObserverManages = x;
    });

    setTimeout(() => subscription.unsubscribe(), 2100);

    this.dataSubscription.subscribe((v) => {
      this.ddataSubscriptionManages = v;
    });
    this.dataSubscription.next("我new Subject类型出来的值");
    this.dataBehaviorSubject.subscribe((v) => {
      this.dataBehaviorSubjectManages = v;
    });
    this.goodsSubject.next([1, 2, 3, 4]);
    this.goodsSubject.subscribe((v) => {
      console.log(v);
    });
  }

}
