import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
			  'container/container.component.css',
			  'cta/cta.component.css',
			  'description/description.component.css',
			  'header/header.component.css',
			  'images/images.component.css',
			  'navigation/navigation.component.css',
			  'pricing-table/pricing-table.component.css',
			  'spacer/spacer.component.css',
			  'testimonial/testimonial.component.css',
			  'underordered-list/underordered-list.component.css'  	
  ]
})
export class AppComponent {
  title = 'app';


//   user: Observable<firebase.User>;
//   items: FirebaseListObservable<any[]>;
//   msgVal: string = '';

//   constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
//     this.items = af.list('/messages', {
//       query: {
//         limitToLast: 50
//       }
//     });

//     this.user = this.afAuth.authState;

//   }

// login() {
//     this.afAuth.auth.signInAnonymously();
// }

// logout() {
//     this.afAuth.auth.signOut();
// }

// Send(desc: string) {
//     this.items.push({ message: desc});
//     this.msgVal = '';
// }


}