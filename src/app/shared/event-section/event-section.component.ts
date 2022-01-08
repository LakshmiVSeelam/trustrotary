import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent implements OnInit {

  events : any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
