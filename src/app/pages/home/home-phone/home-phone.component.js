"use strict";

var __decorate = this && this.__decorate || function(e, o, t, n) {
    var r, c = arguments.length, p = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(e, o, t, n); else for (var m = e.length - 1; m >= 0; m--) (r = e[m]) && (p = (c < 3 ? r(p) : c > 3 ? r(o, t, p) : r(o, t)) || p);
    return c > 3 && p && Object.defineProperty(o, t, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), HomePhoneComponent = function() {
    function e() {}
    return e.prototype.ngOnInit = function() {}, e;
}();

HomePhoneComponent = __decorate([ core_1.Component({
    selector: "app-home-phone",
    templateUrl: "./home-phone.component.html",
    styleUrls: [ "./home-phone.component.css" ]
}) ], HomePhoneComponent), exports.HomePhoneComponent = HomePhoneComponent;