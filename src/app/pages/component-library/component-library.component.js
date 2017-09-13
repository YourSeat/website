"use strict";

var __decorate = this && this.__decorate || function(e, n, o, t) {
    var r, c = arguments.length, p = c < 3 ? n : null === t ? t = Object.getOwnPropertyDescriptor(n, o) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(e, n, o, t); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (p = (c < 3 ? r(p) : c > 3 ? r(n, o, p) : r(n, o)) || p);
    return c > 3 && p && Object.defineProperty(n, o, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ComponentLibraryComponent = function() {
    function e() {}
    return e.prototype.ngOnInit = function() {}, e;
}();

ComponentLibraryComponent = __decorate([ core_1.Component({
    selector: "app-component-library",
    templateUrl: "./component-library.component.html",
    styleUrls: [ "./component-library.component.css", "../../container/container.component.css", "../../description/description.component.css", "../../header/header.component.css", "../../navigation/navigation.component.css", "../../pricing-table/pricing-table.component.css", "../../spacer/spacer.component.css", "../../testimonial/testimonial.component.css", "../../cta/cta.component.css" ]
}) ], ComponentLibraryComponent), exports.ComponentLibraryComponent = ComponentLibraryComponent;