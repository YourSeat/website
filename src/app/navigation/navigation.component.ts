import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css',
  			  '../app.component.less'	
  ]
})
export class NavigationComponent implements OnInit {

  logo
  hamburger

  constructor(){
  	this.logo = '/assets/images/Logo.png'
    this.hamburger = '/assets/images/hamburger.png'
  }

  ngOnInit() {
  }


}
