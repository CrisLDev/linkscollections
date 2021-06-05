import { Component, OnInit } from '@angular/core';
import {MENU} from '@shared/shared.data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menu=MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
