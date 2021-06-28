import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another works!
    </p>
  `,
  styles: [
  ]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
