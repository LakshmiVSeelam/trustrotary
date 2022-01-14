import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams : any;

  constructor() { 
    this.teams = [
      {'name': 'Rtn. K.V.V.B. Sarma', 'role': 'Trust Chairman', 'img': 'Sarma'},
      {'name': 'Rtn. K.S. Murthy', 'role': 'Trust Vice Chairman & Fund Raising Committee Chariman', 'img': 'kmurthy'},
      {'name': 'Rtn. C.A. Boda Anand Kumar', 'role': 'Trust Secretary & Building Project Chairman', 'img': 'anandkumar'},
      {'name': 'Rtn. PDG M. Veerabhadra Reddy (Bobby)', 'role': 'Blood Bank Project Co-Ordinators', 'img': 'reddy'},
      {'name': 'Rtn. J. Hari Babu', 'role': 'Blood Bank Project Co-Ordinators', 'img': 'haribabu'},
      {'name': 'Rtn. C.P.V. Ramanujam', 'role': 'physiotherapy Project Co-Ordinators', 'img': 'ramanujam'},
      {'name': 'Rtn. G.S. Murthy', 'role': 'physiotherapy Project Co-Ordinators', 'img': 'smurthy'},
      {'name': 'Rtn. V. S.N. Murty (Suryam)', 'role': 'skill development Project Co-Ordinators', 'img': 'murty'},
      {'name': 'Rtn. Jayesh Desai', 'role': 'skill development Project Co-Ordinators', 'img': 'jayesh'},
      {'name': 'Rtn. C. Satyanarayana (CS)', 'role': 'Fund-Raising co-ordinator', 'img': 'satya'},
      {'name': 'Rtn. Ravi Teja', 'role': 'construction co-ordinator', 'img': 'raviteja'},
      {'name': 'Rtn. Bandaru Sai Ram', 'role': 'construction co-ordinator', 'img': 'sairam'},
      {'name': 'Rtn. Sama V Bhaskar', 'role': 'ex officio member', 'img': 'bhaskar'}
    ]
  }

  ngOnInit(): void {
  }

}
