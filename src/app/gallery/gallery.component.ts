import { Component, OnInit } from '@angular/core';

declare const gallery_isotope : any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  data : any;
  categories : any;
  constructor() { 
    this.data = [
      {'name': 'Cement Benches', 'imgUrl': 'bench_1'},
      {'name': 'Cement Benches', 'imgUrl': 'bench_2'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'buttermilk_1'},
      {'name': 'Buttermilk Distribution', 'imgUrl': 'buttermilk_2'}
      // {'name': 'Blood Donation', 'imgUrl': 'blood_1'},
      // {'name': 'Blood Donation', 'imgUrl': 'blood_2'}      
    ]
    this.categories = [...new Set(this.data.map((a : any) => a.name))]
  }

  ngAfterViewInit(): void {
    gallery_isotope()
  }

}
