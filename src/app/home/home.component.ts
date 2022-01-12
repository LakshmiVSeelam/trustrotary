import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carousel_data : any = [
    {'img': 'bloodbankcarousel'},
    {'img': 'physiocarousel'},
    {'img': 'skillcarousel'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
