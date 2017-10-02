import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})

@Injectable()

export class CtaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cta_signUp(userName) {
     return userName.toUpperCase();
     // non-component services, such as validation, could also be
     // woven into this function too!
    // example (note: this line of code may not work, but illustrates my point)
    // (e.g. this.validate.userName(username).then(function(userName) => {
    // return userName.toUpper()
    // }))
  }

}
