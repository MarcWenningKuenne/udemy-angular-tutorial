import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <input type="text" #input (keydown)="0">
    <p>{{ input.value }}</p>
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class OtherComponent{
  @ViewChild('input') input: any;
  @ContentChild('paragraph') paragraph: any;

  constructor(){
    setTimeout(() => {
      this.input.nativeElement.value = 'Wert überschrieben!';
      this.paragraph.nativeElement.innerText = 'Wert überschrieben';
    }, 3000);
  }
}
