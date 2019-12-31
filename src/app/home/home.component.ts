import { Component, OnInit, Input, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public count: number;
  @ViewChild('h1', { read: ElementRef, static: true }) public h1: ElementRef;

  constructor() {
    this.count = 0;
    console.log('Home component instance created', this.count);
    this.count++;

  }
  /**
   * on init
   */
  public ngOnInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:red">Home component ngOnInit() called.  number= ${this.count} </h6>`);
    console.log('Home component initialized', this.count);
    this.count++;
  }
  /**
   * do check
   */
  public ngDoCheck(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:black"> Home component ngDoCheck() called. number= ${this.count}</h6>`);
    console.log('Home component doCheck call', this.count);
    this.count++;
  }
  /**
   * on changes
   */
  public ngOnChanges(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:blue"> Home component ngOnChanges() called. number= ${this.count}</h6>`);
    console.log('Home component onchange call', this.count);
    this.count++;
  }
  /**
   * after content init
   */
  public ngAfterContentInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:cyan"> Home component ngAfterContentInit() called. number= ${this.count}</h6>`);
    console.log('Home component afterContentInit call', this.count);
    this.count++;
  }
  /**
   * after content checked
   */
  public ngAfterContentChecked(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:green"> Home component ngAfterContentChecked() called. number= ${this.count}</h6>`);
    console.log('Home component afterContentChecked call', this.count);
    this.count++;
  }
  /**
   * after view init
   */
  public ngAfterViewInit(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:orange"> Home component ngAfterViewInit() called. number= ${this.count}</h6>`);
    console.log('Home component afterViewInit call', this.count);
    this.count++;
  }
  /**
   * after view checked
   */
  public ngAfterViewChecked(): void {
    this.h1.nativeElement.insertAdjacentHTML('beforeend', `<h6 style="color:pink"> Home component ngAfterViewChecked() called. number= ${this.count}</h6>`);
    console.log('Home component afterViewInit call', this.count);
    this.count++;
  }

  /**
   * on destroy
   */
  public ngOnDestroy(): void {
    console.log('Home component destroy');
  }
}
