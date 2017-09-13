"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var home_component_1 = require("./pages/home/home.component"), contact_component_1 = require("./pages/contact/contact.component"), about_component_1 = require("./pages/about/about.component"), early_access_component_1 = require("./pages/early-access/early-access.component"), component_library_component_1 = require("./pages/component-library/component-library.component");

exports.routerConfig = [ {
    path: "home",
    component: home_component_1.HomeComponent
}, {
    path: "contact",
    component: contact_component_1.ContactComponent
}, {
    path: "about",
    component: about_component_1.AboutComponent
}, {
    path: "early-access",
    component: early_access_component_1.EarlyAccessComponent
}, {
    path: "component-library",
    component: component_library_component_1.ComponentLibraryComponent
} ];