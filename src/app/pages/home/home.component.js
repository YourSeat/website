"use strict";

var __decorate = this && this.__decorate || function(e, t, o, n) {
    var s, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (s = e[r]) && (c = (i < 3 ? s(c) : i > 3 ? s(t, o, c) : s(t, o)) || c);
    return i > 3 && c && Object.defineProperty(t, o, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), HomeComponent = function() {
    function e(e) {
        var t = this;
        this.ngZone = e, this.object_center_remove = !1, this.spacer_add = !1, this.mobile = !1, 
        this.desktop = !0, this.tablet = !1, this.dummy = "/assets/images/Logo.png", this.hamburger = "/assets/images/hamburger.png", 
        this.content_calendar = "/assets/images/content-calendar.png", this.content_calendar_feature = "/assets/images/content-calendar-feature.png", 
        this.smile_face = "/assets/images/Logo.png", window.onresize = function(o) {
            e.run(function() {
                t.width = window.innerWidth, t.width <= 479 ? (console.log("479 it is!!!!"), t.object_center_remove = !0, 
                t.spacer_add = !0, t.mobile = !0, console.log("1:" + t.mobile), t.desktop = !1, 
                console.log("1:" + t.desktop)) : t.width > 479 && (t.desktop = !0, t.mobile = !1);
            });
        };
    }
    return e.prototype.ngOnInit = function() {
        this.width = window.innerWidth, this.width <= 479 ? (console.log("479 it is!!!!"), 
        this.object_center_remove = !0, this.spacer_add = !0, this.mobile = !0, this.desktop = !1) : this.width > 479 && (this.desktop = !0, 
        this.mobile = !1);
    }, e;
}();

HomeComponent = __decorate([ core_1.Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.css", "../../container/container.component.css", "../../images/images.component.css", "../../description/description.component.css", "../../header/header.component.css", "../../navigation/navigation.component.css", "../../spacer/spacer.component.css", "../../testimonial/testimonial.component.css", "../../cta/cta.component.css" ]
}) ], HomeComponent), exports.HomeComponent = HomeComponent;