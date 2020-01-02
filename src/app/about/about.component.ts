import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  /**
   * on destroy
   */
  ngOnDestroy(): void {
    console.log('about component on destroy call');
  }

}
