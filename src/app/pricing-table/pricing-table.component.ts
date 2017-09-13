import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  isClassVisible:boolean = true

  constructor() { }

  ngOnInit() {
  }

}
