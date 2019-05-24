import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ArticlePage = /** @class */ (function () {
    function ArticlePage() {
        // this.post = navParams.get('post');
    }
    ArticlePage.prototype.goBack = function () {
        console.log("back clicked");
    };
    ArticlePage.prototype.ngOnInit = function () {
    };
    ArticlePage = tslib_1.__decorate([
        Component({
            selector: 'app-article',
            templateUrl: './article.page.html',
            styleUrls: ['./article.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ArticlePage);
    return ArticlePage;
}());
export { ArticlePage };
//# sourceMappingURL=article.page.js.map