import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another works!
    </p>
    <ng-content></ng-content>
  `,
  // mit <ng-content></ng-content> gibt man an, dass im template einer anderen
  // Component der Inhalt dieser Component verändert werden kann. Dies
  // geschieht in der Datein other.component.html
  styles: [
  ]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
