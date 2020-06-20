import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-nav-bar>
      <app-main-content></app-main-content>
      <app-footer></app-footer>
    </app-nav-bar>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
