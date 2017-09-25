"use strict";

var __decorate = this && this.__decorate || function(e, o, n, t) {
    var r, p = arguments.length, c = p < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, n) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, n, t); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (c = (p < 3 ? r(c) : p > 3 ? r(o, n, c) : r(o, n)) || c);
    return p > 3 && c && Object.defineProperty(o, n, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), router_1 = require("@angular/router"), router_config_1 = require("./router.config"), app_component_1 = require("./app.component"), navigation_component_1 = require("./navigation/navigation.component"), spacer_component_1 = require("./spacer/spacer.component"), container_component_1 = require("./container/container.component"), pricing_table_component_1 = require("./pricing-table/pricing-table.component"), header_component_1 = require("./header/header.component"), description_component_1 = require("./description/description.component"), cta_component_1 = require("./cta/cta.component"), testimonial_component_1 = require("./testimonial/testimonial.component"), underordered_list_component_1 = require("./underordered-list/underordered-list.component"), home_component_1 = require("./pages/home/home.component"), contact_component_1 = require("./pages/contact/contact.component"), about_component_1 = require("./pages/about/about.component"), early_access_component_1 = require("./pages/early-access/early-access.component"), component_library_component_1 = require("./pages/component-library/component-library.component"), images_component_1 = require("./images/images.component"), home_phone_component_1 = require("./pages/home/home-phone/home-phone.component"), AppModule = function() {
    function e() {}
    return e;
}();

AppModule = __decorate([ core_1.NgModule({
    declarations: [ app_component_1.AppComponent, navigation_component_1.NavigationComponent, spacer_component_1.SpacerComponent, container_component_1.ContainerComponent, pricing_table_component_1.PricingTableComponent, header_component_1.HeaderComponent, description_component_1.DescriptionComponent, cta_component_1.CtaComponent, testimonial_component_1.TestimonialComponent, underordered_list_component_1.UnderorderedListComponent, home_component_1.HomeComponent, contact_component_1.ContactComponent, about_component_1.AboutComponent, early_access_component_1.EarlyAccessComponent, component_library_component_1.ComponentLibraryComponent, images_component_1.ImagesComponent, home_phone_component_1.HomePhoneComponent ],
    imports: [ platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(router_config_1.routerConfig) ],
    bootstrap: [ app_component_1.AppComponent ]
}) ], AppModule), exports.AppModule = AppModule;