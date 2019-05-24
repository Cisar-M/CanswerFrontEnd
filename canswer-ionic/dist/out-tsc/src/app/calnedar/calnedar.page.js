import * as tslib_1 from "tslib";
import { Component, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
var CalnedarPage = /** @class */ (function () {
    function CalnedarPage(alertCtrl, locale) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.event = {
            title: '',
            description: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'day',
            currentDate: new Date()
        };
        this.viewTitle = '';
    }
    CalnedarPage.prototype.ngOnInit = function () {
        this.resetEvent();
    };
    CalnedarPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            description: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    CalnedarPage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            description: this.event.description
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    CalnedarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalnedarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    CalnedarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    CalnedarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalnedarPage.prototype.onEventSelected = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var start, end, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = formatDate(event.startTime, 'medium', this.locale);
                        end = formatDate(event.endTime, 'medium', this.locale);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CalnedarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    //Time slot that was selected
    CalnedarPage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], CalnedarPage.prototype, "myCal", void 0);
    CalnedarPage = tslib_1.__decorate([
        Component({
            selector: 'app-calnedar',
            templateUrl: './calnedar.page.html',
            styleUrls: ['./calnedar.page.scss'],
        }),
        tslib_1.__param(1, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [AlertController, String])
    ], CalnedarPage);
    return CalnedarPage;
}());
export { CalnedarPage };
//# sourceMappingURL=calnedar.page.js.map