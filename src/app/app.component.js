"use strict";

var __decorate = this && this.__decorate || function(e, t, o, n) {
    var c, p = arguments.length, r = p < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (c = e[s]) && (r = (p < 3 ? c(r) : p > 3 ? c(t, o, r) : c(t, o)) || r);
    return p > 3 && r && Object.defineProperty(t, o, r), r;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), AppComponent = function() {
    function e() {
        this.title = "app";
    }
    return e;
}();

AppComponent = __decorate([ core_1.Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css", "container/container.component.css", "cta/cta.component.css", "description/description.component.css", "header/header.component.css", "images/images.component.css", "navigation/navigation.component.css", "pricing-table/pricing-table.component.css", "spacer/spacer.component.css", "testimonial/testimonial.component.css", "underordered-list/underordered-list.component.css" ]
}) ], AppComponent), exports.AppComponent = AppComponent;