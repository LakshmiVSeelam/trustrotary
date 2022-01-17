import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams : any;
  team_mem : any ;

  constructor() { 
    let data = [
      {'grp': 1, 'name': 'Rtn. K.V.V.B. Sarma', 'role': 'Trust Chairman', 'img': 'Sarma'},
      {'grp': 1, 'name': 'Rtn. K.S. Murthy', 'role': 'Trust Vice Chairman & Fund Raising Committee Chariman', 'img': 'kmurthy'},
      {'grp': 1, 'name': 'Rtn. C.A. Boda Anand Kumar', 'role': 'Trust Secretary & Building Project Chairman', 'img': 'anandkumar'},
      {'grp': 2, 'name': 'Rtn. PDG M. Veerabhadra Reddy <br> (Bobby)', 'role': 'Blood Bank Project Co-Ordinator', 'img': 'reddy'},
      {'grp': 2, 'name': 'Rtn. J. Hari Babu', 'role': 'Blood Bank Project Co-Ordinator', 'img': 'haribabu'},
      {'grp': 2, 'name': 'Rtn. C.P.V. Ramanujam', 'role': 'physiotherapy Project Co-Ordinator', 'img': 'ramanujam'},
      {'grp': 2, 'name': 'Rtn. G.S. Murthy', 'role': 'physiotherapy Project Co-Ordinator', 'img': 'smurthy'},
      {'grp': 2, 'name': 'Rtn. V. S.N. Murty (Suryam)', 'role': 'skill development Project Co-Ordinator', 'img': 'murty'},
      {'grp': 2, 'name': 'Rtn. Jayesh Desai', 'role': 'skill development Project Co-Ordinator', 'img': 'jayesh'},
      {'grp': 3, 'name': 'Rtn. C. Satyanarayana (CS)', 'role': 'Fund-Raising co-ordinator', 'img': 'satya'},
      {'grp': 3, 'name': 'Rtn. Ravi Teja', 'role': 'construction co-ordinator', 'img': 'raviteja'},
      {'grp': 3, 'name': 'Rtn. Bandaru Sai Ram', 'role': 'construction co-ordinator', 'img': 'sairam'},
      {'grp': 3, 'name': 'Rtn. Sama V Bhaskar', 'role': 'ex officio member', 'img': 'bhaskar'}
    ]
    this.team_mem = data.reduce((r : any, a : any) => {
      r[a.grp] = [...r[a.grp] || [], a];
      return r;
     }, {});
    
    this.teams = Object.keys(this.team_mem)
  }

  ngOnInit(): void {
  }

}
