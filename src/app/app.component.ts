import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Databinding</h1>
    <app-other>
      <p #paragraph>Dies ist ein Paragraph</p>
    </app-other>
  `
})
export class AppComponent {
}
