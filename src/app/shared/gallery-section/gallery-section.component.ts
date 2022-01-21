import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {
  data: any;
  constructor() {
    this.data = [
      {'name': 'Cement Benches', 'imgUrl': 'img_1.jpg'},
      {'name': 'Cement Benches', 'imgUrl': 'img_2.jpg'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'img_3.jpg'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'img_4.jpg'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'img_5.jpg'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'img_6.jpg'}
    ]
  }

  ngOnInit(): void {
  }

}
