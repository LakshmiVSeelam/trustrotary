import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {

  services : any;

  constructor() { 
    this.services = [
      {'service': 'Blood Bank', 'logo': 'bloodbank', 'link': '/programs/bloodbank'},
      {'service': 'Physiotherapy', 'logo': 'physiotherapy', 'link': '/programs/physiotherapy'},
      {'service': 'Skill Development', 'logo': 'skilldevelopment', 'link': '/programs/skilldevelopment'}
    ]
  }

  ngOnInit(): void {
  }

}
