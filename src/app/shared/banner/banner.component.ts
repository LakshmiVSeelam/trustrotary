import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() page!: string;
  @Input() pageName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
