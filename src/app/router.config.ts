import {Route} from "@angular/router";

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { EarlyAccessComponent } from './pages/early-access/early-access.component';
import {ComponentLibraryComponent} from './pages/component-library/component-library.component';

export const routerConfig : Route[] = [
    {
        path:'home',
        component: HomeComponent
    },               
	{
        path:'contact',
        component: ContactComponent
    },  
	{
        path:'about',
        component: AboutComponent
    },     
	{
        path:'early-access',
        component: EarlyAccessComponent
    },  
    {
        path:'component-library',
        component: ComponentLibraryComponent
    },                                
];