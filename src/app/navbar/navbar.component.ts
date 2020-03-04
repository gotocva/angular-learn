import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activeMenu;
  public current_link;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.activeMenu = localStorage.getItem('activeMenu'); // on component load get localStorage value
    this.current_link = this.router.url;
  }

  /**
   * method to toggle the active menu by localStorage
   * @param active_menu 
   */
  setActive(active_menu){
    localStorage.setItem('activeMenu',active_menu);
    // alert(active_menu);
    this.activeMenu = active_menu;
    // alert("works")
  }

}
