import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = 'chad'
  email
  password

  show = false

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(email, password){
  		this.show = true
       	console.log(this.show)


  		this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {

        // Handle Errors here.
        var errorCode = error[0]
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
          console.log(error[0])
        }
        console.log(error);
        // [END_EXCLUDE]
      });

  		// this.us

  		// auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // [START_EXCLUDE]
    //     if (errorCode == 'auth/weak-password') {
    //       alert('The password is too weak.');
    //     } else {
    //       alert(errorMessage);
    //     }
    //     console.log(error);
    //     // [END_EXCLUDE]
    //   });
  }


  	submittedData(){
  		
  	}
  		
}
