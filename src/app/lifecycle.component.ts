import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle works!
    </p>
  `,
  styles: [
  ]
})
export class LifecycleComponent implements 
  OnChanges, 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('OnChanges');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngDoCheck(){
    console.log('DoCheck');
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }

}
