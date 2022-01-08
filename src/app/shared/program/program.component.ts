import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  services : any;
  program: any;
  programId : any;

  constructor(private route : ActivatedRoute) { 
    this.services = {
      'bloodbank': {
        'service': 'Karuturi Rotary Central Blood Bank',
        'logo': '',
        'objectives': ['Safe and adequate blood supply', 'Reducing turnover time','Preventing wastage of blood', ' Networking of blood bank', 'Donor repository'],
      },
      'physiotherapy': {
        'service': 'Physiotherapy',
        'logo': '',
        'objectives': ['Reduce an element of pain', 'Improve mobility', 'Recover from or prevent a sports injury', 'Manage age related issues', ' Prevent disability or surgery', 'Work and balance to prevent a slip injury or a fall', 'Train to use assistive device like a walker or Cane'],
      },
      'skilldevelopment': {
        'service': 'Skill Development',
        'logo': '',
        'courses': ['Coding', 'SEO Marketing', 'Creative Thinking', 'Communication', 'Assessing and analysing information', 'Artificial intelligence  (AI)', 'Internet of things (IOT) & other such skills.'],
        'objectives': ['Mould the youth in such a way that they get employment and also improve entrepreneurship', 'More emphasis to be given in new avenues', 'The training programme on lines of international level', 'Tailor made & need based programs for specific groups'],
      }
    }
    this.route.params.subscribe(res => {
      this.programId = res.program
      this.program = this.services[res.program]
    })
  }

  ngOnInit(): void {
  }

}
