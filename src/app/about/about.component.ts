import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sections : any ;
 
  constructor() {
    this.sections = [
      {'name': 'Our Club', 'logo': 'club_logo.jpg','desc': 'Rotary Club of Kakinada Central was chartered on 24th Feb 1982. Since then, our club always believed in Service to Humanity and Fellowship through Service. The service rendered to the community is invaluable in terms of time & money. As on 30th July 2021, we have 74 members in our club.', 'routerLink': '/achievements'},
      {'name': 'Our Trust', 'logo': 'trust_logo.png','desc': 'This trust is formed with a motto  <strong>“There is a way”</strong> to act with care and diligence to the best of our ability in good faith and preserve the value of trust.  The Trust Board consists of Twelve Members as founder trustees in addition to founder trustees, The president and Secretary of Rotary club of Kakinada central will be Ex officio members of the Trust'},
      {'name': 'Rotary International (RI)', 'logo': 'ri_logo.png','desc': "Rotary brings together a global network of volunteer leaders who dedicate their time and talent to tackle the world's most pressing humanitarian challenges. Rotary connects 1.4 million members from more than 200 countries and geographical areas. Their work impacts lives at both the local and international levels.", 'link': 'https://www.rotary.org/en'},
      {'name': 'The Rotary Foundation (TRF)', 'logo': 'rfi_logo.png','desc': 'The Rotary Foundation is a non-profitable organisation that supports the efforts of RI to achieve world understanding and peace through International humanitarian, educational and cultural programs. It is supported solely by voluntary contribution. Our club has contributed more than One crore rupees to Rotary Foundation.', 'link': 'http://rotaryfoundationindia.org/'}
    ]
  }

  ngOnInit(): void {
  }

}
