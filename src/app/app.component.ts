import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@HostListener('window:scroll', [])

export class AppComponent implements OnInit{
  title = 'rotary';
  scrollClass : string = 'd-none';
  constructor() {

  }

  ngOnInit() : void {
    window.addEventListener('scroll', this.scroll, true);
    this.scrollClass = window.scrollY > 0 ? '' : 'd-none'
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.scrollClass = window.scrollY > 0 ? '' : 'd-none'
  };

  scrollUp() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
  }

}


