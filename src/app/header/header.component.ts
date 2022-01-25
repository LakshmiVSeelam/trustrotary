import { Component, OnInit } from '@angular/core';

declare const donate_modal : any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  routes : any ;

  constructor() {

    this.routes = [
      {'name': 'Home', 'link': '/home'},
      {'name': 'About', 'link': '/about'},
      {'name': 'Programs', 'link': '/programs' , 'children': [
        {'name': 'Blood Bank', 'link': '/programs/bloodbank'}, {'name': 'Physiotherapy', 'link': '/programs/physiotherapy'}, {'name': 'Skill Development', 'link': '/programs/skilldevelopment'}
      ]},
      {'name': 'Gallery', 'link': '/gallery'},
      {'name': 'Contact', 'link': '/contact'}
    ]
  }

  
  // displayStyle = "none";
  
  openPopup() {
    donate_modal()
  }


  ngOnInit(): void {
  }

}
