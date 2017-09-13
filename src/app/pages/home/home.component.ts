import { Component, OnInit, NgZone } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
          '../../container/container.component.css',
          '../../images/images.component.css',
          '../../description/description.component.css',
          '../../header/header.component.css',
          '../../navigation/navigation.component.css',
          '../../spacer/spacer.component.css',
          '../../testimonial/testimonial.component.css',
          '../../cta/cta.component.css' 
  ]
})
export class HomeComponent implements OnInit {

  dummy
  hamburger
  content_calendar
  content_calendar_feature
  smile_face
  width
  height
  object_center_remove = false
  spacer_add = false
  mobile = false
  desktop = true
  tablet = false 


  constructor(private ngZone:NgZone) { 
     this.dummy = '/assets/images/Logo.png'
     this.hamburger = '/assets/images/hamburger.png'
     this.content_calendar = '/assets/images/content-calendar.png'
     this.content_calendar_feature = '/assets/images/content-calendar-feature.png'
     this.smile_face = '/assets/images/Logo.png'

   window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.width = window.innerWidth;
            if (this.width <= 479){
                console.log('479 it is!!!!')
                this.object_center_remove = true
                this.spacer_add = true
                this.mobile = true
                console.log("1:" + this.mobile)
                this.desktop = false
                 console.log("1:" + this.desktop)
            }
            else if (this.width > 479){
                this.desktop = true
                this.mobile = false
            }

        });
    };

  }

  ngOnInit() {
            this.width = window.innerWidth;
             if (this.width <= 479){
                console.log('479 it is!!!!')
                this.object_center_remove = true
                this.spacer_add = true
                this.mobile = true
                this.desktop = false;
            }
            else if (this.width > 479){
                this.desktop = true
                this.mobile = false
            }

  }

}
