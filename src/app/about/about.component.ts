import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;
  constructor(private router: Router, private data: DataService) {
  }

  ngOnInit() {
    this.data.goal.subscribe(res => this.goals = res);
  }

  goBackHome() {
    this.router.navigate(['']);
  }
}
