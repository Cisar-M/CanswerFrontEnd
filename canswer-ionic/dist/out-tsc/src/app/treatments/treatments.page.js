import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
var TreatmentsPage = /** @class */ (function () {
    function TreatmentsPage(navCtrl, platform, document, file, transfer) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
    }
    TreatmentsPage.prototype.ngOnInit = function () {
    };
    TreatmentsPage.prototype.openLocalPdf = function () {
        var options = {
            title: 'My PDF'
        };
        console.log('work');
        this.document.viewDocument('.\assets\images\Managing_the_Side_Effects_of_Chemotherapy.pdf', 'application/pdf', options);
    };
    TreatmentsPage.prototype.downloadAndOpenPdf = function () {
        var _this = this;
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else {
            path = this.file.dataDirectory;
        }
        var transfer = this.transfer.create();
        transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'chemcare.pdf ').then(function (entry) {
            var url = entry.TOURL();
            _this.document.viewDocument(url, 'application/pdf', {});
        });
    };
    TreatmentsPage = tslib_1.__decorate([
        Component({
            selector: 'app-treatments',
            templateUrl: './treatments.page.html',
            styleUrls: ['./treatments.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, Platform, DocumentViewer, File, FileTransfer])
    ], TreatmentsPage);
    return TreatmentsPage;
}());
export { TreatmentsPage };
//# sourceMappingURL=treatments.page.js.map