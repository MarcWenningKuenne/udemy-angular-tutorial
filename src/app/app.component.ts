import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Databinding</h1>
    <app-lifecycle [name]="name" *ngIf="attach"></app-lifecycle>
    <hr>
    <button (click)="name = 'Anna'">Name ändern</button>
    <button (click)="attach = false">Zerstören</button>
  `
})
export class AppComponent {
  name = 'Marc';
  attach = true;
}
