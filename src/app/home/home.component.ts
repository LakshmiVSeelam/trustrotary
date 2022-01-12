import { Component, OnInit } from '@angular/core';

declare const banner_carouselFn : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  carousel_data : any = [
    {'img': 'buildingcarousel', 'link': '/about', 'heading': '','content': ''},
    {'img': 'bloodbankcarousel', 'link': '/programs/bloodbank', 'heading': 'Donate blood. Save life.','content': 'There is a hope of life to someone in your blood donation'},
    {'img': 'physiocarousel' , 'link': '/programs/physiotherapy', 'heading': 'You are not sick. You are injured.', 'content': 'Inhale Courage. Exhale Fear'},
    {'img': 'skillcarousel', 'link': '/programs/skilldevelopment', 'heading': 'Invest in yourself. It pays the best interest.', 'content': 'Fortunate are the few who can master a skill'}
  ]
  
  constructor() { }

  ngOnInit(): void {
    banner_carouselFn()
  }

  

}
