import { Component, OnInit } from '@angular/core';

declare const banner_carouselFn : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  carousel_data : any = [
    {'img': 'bloodbankcarousel', 'link': '/programs/bloodbank', 'heading': 'Donate Blood, Save Life.','content': 'There is a hope of life to someone in your blood donation'},
    {'img': 'physiocarousel' , 'link': '/programs/physiotherapy', 'heading': 'You are not sick.', 'content': 'You are injured Activity and therapy help healing most'},
    {'img': 'skillcarousel', 'link': '/programs/skilldevelopment', 'heading': 'Skills don’t die; only people do.', 'content': 'Invest in yourself. It pays the best interest.'}
  ]
  
  constructor() { }

  ngOnInit(): void {
    banner_carouselFn()
  }

  

}
