import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

//Services
import { ImagesComponent } from './images/images.component'

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
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
