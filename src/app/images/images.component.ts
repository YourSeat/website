import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  calendar_checklist
  content_calendar
  content_ideas 
  content_marketing_metrics
  schedule_social_media 


  constructor() {
  	 this.calendar_checklist = '/assets/images/calendar-checklist.png'
  	 this.content_calendar = '/assets/images/content-calendar-feature.png'
  	 this.content_ideas  = '/assets/images/content-ideas.png'
  	 this.content_marketing_metrics = '/assets/images/content-marketing-metrics.png'
  	 this.schedule_social_media = '/assets/images/schedule-social-media.png'
   }

  ngOnInit() {
  }

}
