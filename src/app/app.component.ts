import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@HostListener('window:scroll', [])

export class AppComponent implements OnInit{
  title = 'rotary';
  scrollClass : string = 'd-none';
  currentUrl : any ;

  constructor(private router : Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        console.log(event.url)
        if(event.url == '/'){
          document.body.style.background = "url('assets/img/body_bg.jpg') repeat ";
          document.body.style.backgroundSize = "contain";
        }
      }
    });
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


