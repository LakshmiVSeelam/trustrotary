import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router  } from '@angular/router';


declare const gallery_isotope : any;
declare const showLoader : any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{

  data : any = [];
  categories : any;
  constructor(private http : HttpClient, private dom: DomSanitizer, private router : Router) { 
    showLoader()
  }

  ngOnInit(): void {
    showLoader()
    this.http.get("https://www.googleapis.com/drive/v3/files?q=%271wgztQV79g_PInlhPV9BG22sHbSTwx78h%27+in+parents&key=AIzaSyCne62ecH91Vqoyos5VA6gc62jsucnbpB4").subscribe((res : any) => {
      
      this.categories = res.files
      this.getImages(this.categories)
    })    
  }

  getImages(arr : any){
    arr.forEach((ele : any, i : any) => {
      this.http.get(`https://www.googleapis.com/drive/v3/files?q=%27${ele.id}%27+in+parents&key=AIzaSyCne62ecH91Vqoyos5VA6gc62jsucnbpB4`).subscribe((res: any) => {
        res.files.forEach((file : any) => {
          this.data.push({
            'name': ele.id,
            'url': this.dom.bypassSecurityTrustResourceUrl(`https://drive.google.com/uc?id=${file.id}`)
          })
          if(i == arr.length - 1){
            gallery_isotope()
          }
        });
      })      
    });
  }

  ngAfterViewInit(): void {
    // gallery_isotope()
  }

}
