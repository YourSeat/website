"use strict";

var __decorate = this && this.__decorate || function(e, t, o, n) {
    var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), NavigationComponent = function() {
    function e() {
        this.logo = "/assets/images/Logo.png", this.hamburger = "/assets/images/hamburger.png";
    }
    return e.prototype.ngOnInit = function() {}, e;
}();

NavigationComponent = __decorate([ core_1.Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: [ "./navigation.component.css", "../app.component.less" ]
}) ], NavigationComponent), exports.NavigationComponent = NavigationComponent;