"use strict";

var __decorate = this && this.__decorate || function(e, t, n, s) {
    var o, a = arguments.length, c = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, n) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, s); else for (var r = e.length - 1; r >= 0; r--) (o = e[r]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
    return a > 3 && c && Object.defineProperty(t, n, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ImagesComponent = function() {
    function e() {
        this.calendar_checklist = "/assets/images/calendar-checklist.png", this.content_calendar = "/assets/images/content-calendar-feature.png", 
        this.content_ideas = "/assets/images/content-ideas.png", this.content_marketing_metrics = "/assets/images/content-marketing-metrics.png", 
        this.schedule_social_media = "/assets/images/schedule-social-media.png";
    }
    return e.prototype.ngOnInit = function() {}, e;
}();

ImagesComponent = __decorate([ core_1.Component({
    selector: "app-images",
    templateUrl: "./images.component.html",
    styleUrls: [ "./images.component.css" ]
}) ], ImagesComponent), exports.ImagesComponent = ImagesComponent;