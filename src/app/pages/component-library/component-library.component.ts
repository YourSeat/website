import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.css',
  			  '../../container/container.component.css',
  			  '../../description/description.component.css',
  			  '../../header/header.component.css',
  			  '../../navigation/navigation.component.css',
  			  '../../pricing-table/pricing-table.component.css',
  			  '../../spacer/spacer.component.css',
  			  '../../testimonial/testimonial.component.css',
          '../../cta/cta.component.css'	
  ]
})
export class ComponentLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
