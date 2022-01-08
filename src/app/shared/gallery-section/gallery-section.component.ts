import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {
  events: any;
  constructor() {
    this.events = [
      {'name': 'Distribution of 3600 pairs of Slippers to Municipal School Students at Kakinada'}
    ]
  }

  ngOnInit(): void {
  }

}
