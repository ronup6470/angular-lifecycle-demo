// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// tslint:disable-next-line:max-line-length
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public count: number;
  @ViewChild('h1', { read: ElementRef, static: true }) public h1: ElementRef;

  constructor() {
    this.count = 0;
    console.log('app component instance created', this.count);
    this.count++;

  }
  /**
   * on init
   */
  public ngOnInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:red">app component ngOnInit() called.  number= ${this.count} </h6>`);
    console.log('app component initialized', this.count);
    this.count++;
  }
  /**
   * do check
   */
  public ngDoCheck(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:black"> app component ngDoCheck() called. number= ${this.count}</h6>`);
    console.log('app component doCheck call', this.count);
    this.count++;
  }
  /**
   * on changes
   */
  public ngOnChanges(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:blue"> app component ngOnChanges() called. number= ${this.count}</h6>`);
    console.log('app component onchange call', this.count);
    this.count++;
  }
  /**
   * after content init
   */
  public ngAfterContentInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:cyan"> app component ngAfterContentInit() called. number= ${this.count}</h6>`);
    console.log('app component afterContentInit call', this.count);
    this.count++;
  }
  /**
   * after content checked
   */
  public ngAfterContentChecked(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:green"> app component ngAfterContentChecked() called. number= ${this.count}</h6>`);
    console.log('app component afterContentChecked call', this.count);
    this.count++;
  }
  /**
   * after view init
   */
  public ngAfterViewInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:orange"> app component ngAfterViewInit() called. number= ${this.count}</h6>`);
    console.log('app component afterViewInit call', this.count);
    this.count++;
  }
  /**
   * after view checked
   */
  public ngAfterViewChecked(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:pink"> app component ngAfterViewChecked() called. number= ${this.count}</h6>`);
    console.log('app component afterViewInit call', this.count);
    this.count++;
  }

  /**
   * on destroy
   */
  public ngOnDestroy(): void {
    console.log('app component destroy');
  }

}
