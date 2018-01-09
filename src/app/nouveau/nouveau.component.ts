import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {
  display = true;
  color: string;
  square = true;

  users: Array<{nom}> = [];
  constructor() {
    this.users.push({nom: 'jean'});
    this.users.push({nom: 'paul'});
    this.users.push({nom: 'pierre'});
   }

  ngOnInit() {
  }

}
