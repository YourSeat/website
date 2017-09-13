"use strict";

var __decorate = this && this.__decorate || function(e, t, n, o) {
    var r, c = arguments.length, i = c < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, o); else for (var l = e.length - 1; l >= 0; l--) (r = e[l]) && (i = (c < 3 ? r(i) : c > 3 ? r(t, n, i) : r(t, n)) || i);
    return c > 3 && i && Object.defineProperty(t, n, i), i;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), PricingTableComponent = function() {
    function e() {
        this.isClassVisible = !0;
    }
    return e.prototype.ngOnInit = function() {}, e;
}();

PricingTableComponent = __decorate([ core_1.Component({
    selector: "app-pricing-table",
    templateUrl: "./pricing-table.component.html",
    styleUrls: [ "./pricing-table.component.css" ]
}) ], PricingTableComponent), exports.PricingTableComponent = PricingTableComponent;