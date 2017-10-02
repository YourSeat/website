import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Routing
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";


//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SpacerComponent } from './spacer/spacer.component';
import { ContainerComponent } from './container/container.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { CtaComponent } from './cta/cta.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UnderorderedListComponent } from './underordered-list/underordered-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { EarlyAccessComponent } from './pages/early-access/early-access.component';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { LoginComponent } from './pages/login/login.component';

//Services
import { ImagesComponent } from './images/images.component';
import { HomePhoneComponent } from './pages/home/home-phone/home-phone.component';


export const firebaseConfig = {
    apiKey: "AIzaSyC0n2-s64hQ46heIKNdOYCfe4TWnBZmitY",
    authDomain: "yourseat-c3722.firebaseapp.com",
    databaseURL: "https://yourseat-c3722.firebaseio.com",
    projectId: "yourseat-c3722",
    storageBucket: "yourseat-c3722.appspot.com",
    messagingSenderId: "1023126863209"
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SpacerComponent,
    ContainerComponent,
    PricingTableComponent,
    HeaderComponent,
    DescriptionComponent,
    CtaComponent,
    TestimonialComponent,
    UnderorderedListComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    EarlyAccessComponent,
    ComponentLibraryComponent,
    ImagesComponent,
    HomePhoneComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [CtaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
