import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activeMenu;

  constructor() { }

  ngOnInit(): void {
    this.activeMenu = localStorage.getItem('activeMenu');
  }

  setActive(active_menu){
    localStorage.setItem('activeMenu',active_menu);
    // alert(active_menu);
    this.activeMenu = active_menu;
    // alert("works")
  }

}
