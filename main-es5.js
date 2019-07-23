(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/final-order/final-order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/final-order/final-order.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow\">\r\n  <h1 translate>FINAL_LAST_STEP</h1>\r\n  <p class=\"button\"><a href={{formLink}} class=\"button\" translate>FINAL_OPEN_FORMS</a></p>\r\n  <p translate>FINAL_RESULT_EXPLANATION</p>\r\n  <p translate>FINAL_RESULT_FOLLOW_LINK</p>\r\n  <section class=\"non-inline-div\" *ngFor=\"let group of results\">\r\n    <p class=\"score\" translate [translateParams]=\"{score: group.score}\">FINAL_SCORE</p>\r\n    <div class=\"inline-div\" *ngFor=\"let photo of group.photos\">\r\n        <img src=\"assets/{{photo.index}}.jpg\" />\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"narrow\">\r\n    <p>\r\n        <a class=\"language\" [routerLink]=\"\" (click)=\"changeLanguage('pt')\">Português</a> | <a class=\"language\"\r\n            [routerLink]=\"\" (click)=\"changeLanguage('en')\">English</a>\r\n    </p>\r\n    <h1 translate>INTRO_PHOTO_CONTEST</h1>\r\n    <p translate>INTRO_WELCOME</p>\r\n    <!-- <p translate>INTRO_PICK</p> -->\r\n\r\n    <h3 translate>INTRO_CONTESTANTS_TITLE</h3>\r\n    <p translate>INTRO_CONTESTANTS_DETAILS</p>\r\n\r\n    <h3 translate>INTRO_RULES_TITLE</h3>\r\n    <p translate>INTRO_RULES_DETAILS</p>\r\n\r\n\r\n    <p class=\"button\">\r\n        <button (click)=\"chooseAlgorithm('mergesort')\" translate>\r\n            INTRO_VOTE_BUTTON\r\n        </button>\r\n    </p>\r\n\r\n    <!-- <p class=\"option-description\" translate>INTRO_MERGESORT_DESCRIPTION</p>\r\n    <p class=\"button\">\r\n        <button (click)=\"chooseAlgorithm('mergesort')\" translate\r\n            [translateParams]=\"{mergeSortQuantity: mergeSortQuantity}\">\r\n            INTRO_MERGESORT_BUTTON\r\n        </button>\r\n    </p> -->\r\n\r\n    <!-- <p class=\"option-description\" translate>INTRO_ELIMINATION_DESCRIPTION</p>\r\n    <p class=\"button\">\r\n        <button (click)=\"chooseAlgorithm('elimination')\" translate\r\n            [translateParams]=\"{eliminationQuantity: eliminationQuantity}\">\r\n            INTRO_ELIMINATION_BUTTON\r\n        </button>\r\n    </p>\r\n    <hr> -->\r\n\r\n    <h2 translate>INTRO_ADDITIONAL_DETAILS</h2>\r\n\r\n    <!-- <h3 translate>INTRO_ELIMINATION_TITLE</h3>\r\n    <p [innerHTML]=\"'INTRO_ELIMINATION_DETAILS' | translate\"></p> -->\r\n\r\n    <h3 translate>INTRO_VOTES_COMPUTED_TITLE</h3>\r\n    <p translate>INTRO_VOTES_COMPUTED_DETAILS</p>\r\n\r\n    <!-- <h3 translate>INTRO_WHY_2_TYPES_TITLE</h3>\r\n    <p translate>INTRO_WHY_2_TYPES_DETAILS</p> -->\r\n\r\n    <h3 translate>INTRO_MERGESORT_TITLE</h3>\r\n    <p [innerHTML]=\"'INTRO_MERGESORT_DETAILS' | translate: {mergeSortQuantity: mergeSortQuantity}\"></p>\r\n\r\n    <h3 translate>INTRO_SOURCE_CODE_TITLE</h3>\r\n    <p>\r\n        <a href=\"https://github.com/mutmedia/photo-contest\">https://github.com/mutmedia/photo-contest</a>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photo-picker/photo-picker.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photo-picker/photo-picker.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"remaining\" translate [translateParams]=\"{quantityOfRemainingRounds: quantityOfRemainingRounds}\">PICKER_REMAINING_VOTES</p>\r\n<p translate>PICKER_PICK_BEST_PHOTO</p>\r\n<div class=\"option\">\r\n    <input type=\"image\" src=\"assets/{{photoA.index}}.jpg\" (click)=\"vote('a')\" />\r\n</div>\r\n<div class=\"option\">\r\n    <input type=\"image\" src=\"assets/{{photoB.index}}.jpg\" (click)=\"vote('b')\" />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/voting/voting.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voting/voting.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-intro *ngIf=\"!votingAlgorithmSelected\"\r\n           [mergeSortQuantity]=\"mergeSortQuantitity\"\r\n           [eliminationQuantity]=\"eliminationQuantity\"\r\n           (choseAlgorithm)=\"onChoseAlgorithm($event)\">\r\n</app-intro>\r\n\r\n<app-photo-picker *ngIf=\"votingAlgorithmSelected && !isFinished\"\r\n                  [quantityOfRemainingRounds]=\"quantityOfRemainingRounds\"\r\n                  [photoA]=\"photoA\"\r\n                  [photoB]=\"photoB\"\r\n                  (votedForPhoto)=\"onVoted($event)\">\r\n</app-photo-picker>\r\n\r\n<app-final-order *ngIf=\"votingAlgorithmSelected && isFinished\"\r\n                 [results]=\"results\">  \r\n</app-final-order>"

/***/ }),

/***/ "./src/app/algorithms/elimination/elimination-algorithm.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/algorithms/elimination/elimination-algorithm.service.ts ***!
  \*************************************************************************/
/*! exports provided: EliminationAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminationAlgorithmService", function() { return EliminationAlgorithmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vote-selection */ "./src/app/algorithms/vote-selection.ts");



var EliminationAlgorithmService = /** @class */ (function () {
    function EliminationAlgorithmService() {
        this.totalDesiredScore = 1000;
    }
    EliminationAlgorithmService.prototype.initialize = function (elements) {
        var quantityOfElements = elements.length;
        this.isInitialized = true;
        this.currentLevelScore = 1;
        this.remainingRounds = this.getInitialQuantityOfRounds(quantityOfElements);
        var firstLevelSize = this.getQuantityOfElementsOnFirstLevel(quantityOfElements);
        this.elementsOnCurrentLevel = elements.slice(0, firstLevelSize);
        this.elementsOnNextLevel = elements.slice(firstLevelSize);
        this.results = new Array(0);
    };
    EliminationAlgorithmService.prototype.getRemainingQuantityOfRounds = function () {
        this.ensureIsInitialized();
        return this.remainingRounds;
    };
    EliminationAlgorithmService.prototype.getInitialQuantityOfRounds = function (numberOfElements) {
        return numberOfElements - 1;
    };
    EliminationAlgorithmService.prototype.getVoteOptions = function () {
        this.ensureVotingIsNotOver();
        var length = this.elementsOnCurrentLevel.length;
        var optionB = this.elementsOnCurrentLevel[length - 1];
        var optionA = this.elementsOnCurrentLevel[length - 2];
        return { optionA: optionA, optionB: optionB };
    };
    EliminationAlgorithmService.prototype.voteFor = function (selected) {
        this.ensureVotingIsNotOver();
        this.remainingRounds--;
        var optionB = this.elementsOnCurrentLevel.pop();
        var optionA = this.elementsOnCurrentLevel.pop();
        if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA) {
            this.results.push({ elementIndex: optionB, score: this.currentLevelScore });
            this.elementsOnNextLevel.push(optionA);
        }
        else if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB) {
            this.results.push({ elementIndex: optionA, score: this.currentLevelScore });
            this.elementsOnNextLevel.push(optionB);
        }
        if (this.remainingRounds == 0) {
            var index = this.elementsOnNextLevel[0];
            this.results.push({ elementIndex: index, score: 2 * this.currentLevelScore });
            this.results = this.normalizeScores(this.results);
            return;
        }
        if (this.elementsOnCurrentLevel.length == 0) {
            this.elementsOnCurrentLevel = this.elementsOnNextLevel;
            this.elementsOnNextLevel = new Array(0);
            this.currentLevelScore *= 2;
        }
    };
    EliminationAlgorithmService.prototype.getResults = function () {
        this.ensureVotingIsOver();
        return this.results;
    };
    EliminationAlgorithmService.prototype.ensureIsInitialized = function () {
        if (!this.isInitialized) {
            throw new Error("Service should be initialized first.");
        }
    };
    EliminationAlgorithmService.prototype.ensureVotingIsNotOver = function () {
        if (this.remainingRounds <= 0) {
            throw new Error("Voting is over.");
        }
    };
    EliminationAlgorithmService.prototype.ensureVotingIsOver = function () {
        if (this.remainingRounds > 0) {
            throw new Error("Voting is not over.");
        }
    };
    EliminationAlgorithmService.prototype.getQuantityOfElementsOnFirstLevel = function (totalQuantity) {
        var powerOfTwoOfFirstCompleteLevel = Math.floor(Math.log2(totalQuantity));
        var sizeOfFirstCompleteLevel = Math.pow(2, powerOfTwoOfFirstCompleteLevel);
        return sizeOfFirstCompleteLevel == totalQuantity ?
            totalQuantity :
            2 * (totalQuantity - sizeOfFirstCompleteLevel);
    };
    EliminationAlgorithmService.prototype.normalizeScores = function (results) {
        var totalScore = results.map(function (r) { return r.score; }).reduce(function (prev, next) { return prev + next; });
        var adjustFactor = this.totalDesiredScore / totalScore;
        return results.map(function (r) {
            return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
        });
    };
    EliminationAlgorithmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EliminationAlgorithmService);
    return EliminationAlgorithmService;
}());



/***/ }),

/***/ "./src/app/algorithms/mergesort/mergesort-algorithm.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/algorithms/mergesort/mergesort-algorithm.service.ts ***!
  \*********************************************************************/
/*! exports provided: MergesortAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergesortAlgorithmService", function() { return MergesortAlgorithmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vote-selection */ "./src/app/algorithms/vote-selection.ts");



var MergesortAlgorithmService = /** @class */ (function () {
    function MergesortAlgorithmService() {
        this.totalDesiredScore = 1000;
        // With the number below, the 1st photo will have ~360 points both
        // on elimination and merge sort.
        this.magicNumberFor12Photos = 1.56;
    }
    MergesortAlgorithmService.prototype.initialize = function (elements) {
        var quantityOfElements = elements.length;
        this.isInitialized = true;
        this.remainingRounds = this.getTotalQuantityOfRounds(quantityOfElements);
        this.currentBlockSize = 1;
        this.currentOptionA = this.mergedBlockStartIndex = 0;
        this.currentOptionB = 1;
        this.elements = elements;
        this.mergedBlock = new Array();
    };
    MergesortAlgorithmService.prototype.getRemainingQuantityOfRounds = function () {
        this.ensureIsInitialized();
        return this.remainingRounds;
    };
    MergesortAlgorithmService.prototype.getInitialQuantityOfRounds = function (numberOfElements) {
        return this.getTotalQuantityOfRounds(numberOfElements);
    };
    MergesortAlgorithmService.prototype.getVoteOptions = function () {
        this.ensureVotingIsNotOver();
        return {
            optionA: this.elements[this.currentOptionA],
            optionB: this.elements[this.currentOptionB]
        };
    };
    MergesortAlgorithmService.prototype.voteFor = function (selected) {
        this.ensureVotingIsNotOver();
        this.remainingRounds--;
        if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA) {
            this.mergedBlock.push(this.elements[this.currentOptionB++]);
        }
        else if (selected == _vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB) {
            this.mergedBlock.push(this.elements[this.currentOptionA++]);
        }
        if (this.currentOptionA >= this.elements.length ||
            this.currentOptionA >= this.mergedBlockStartIndex + this.currentBlockSize) {
            // Copy what remains of block B.
            while (this.currentOptionB < this.elements.length &&
                this.currentOptionB < this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
                this.mergedBlock.push(this.elements[this.currentOptionB++]);
                this.remainingRounds--;
            }
            // Adding back +1 since that does not count as a round.
            this.remainingRounds++;
        }
        else if (this.currentOptionB >= this.elements.length ||
            this.currentOptionB >= this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
            // Copy what remains of block A.
            while (this.currentOptionA < this.elements.length &&
                this.currentOptionA < this.mergedBlockStartIndex + this.currentBlockSize) {
                this.mergedBlock.push(this.elements[this.currentOptionA++]);
                this.remainingRounds--;
            }
            // Adding back +1 since that does not count as a round.
            this.remainingRounds++;
        }
        if (this.mergedBlock.length == (this.currentBlockSize * 2) ||
            this.remainingRounds == 0) {
            // Current merge is over, prepare next merge.
            this.copyArray(this.elements, this.mergedBlockStartIndex, this.mergedBlock);
            this.mergedBlockStartIndex += this.mergedBlock.length;
            this.currentOptionA = this.mergedBlockStartIndex;
            this.currentOptionB = this.currentOptionA + this.currentBlockSize;
            if (this.currentOptionA >= this.elements.length ||
                this.currentOptionB >= this.elements.length) {
                // Current level is done.
                this.currentBlockSize *= 2;
                this.mergedBlockStartIndex = 0;
                this.currentOptionA = 0;
                this.currentOptionB = this.currentBlockSize;
            }
            this.mergedBlock = new Array();
        }
    };
    MergesortAlgorithmService.prototype.getResults = function () {
        this.ensureVotingIsOver();
        if (this.results == null) {
            this.results = this.elements.map(function (v, i) { return { elementIndex: v, score: i }; });
            this.normalizeScores(this.results);
        }
        return this.results;
    };
    MergesortAlgorithmService.prototype.ensureIsInitialized = function () {
        if (!this.isInitialized) {
            throw new Error("Service should be initialized first.");
        }
    };
    MergesortAlgorithmService.prototype.ensureVotingIsNotOver = function () {
        if (this.remainingRounds <= 0) {
            throw new Error("Voting is over.");
        }
    };
    MergesortAlgorithmService.prototype.ensureVotingIsOver = function () {
        if (this.remainingRounds > 0) {
            throw new Error("Voting is not over.");
        }
    };
    MergesortAlgorithmService.prototype.normalizeScores = function (results) {
        var _this = this;
        var adjustedResults = this.results.map(function (r) {
            return {
                elementIndex: r.elementIndex,
                score: Math.pow(_this.magicNumberFor12Photos, r.score)
            };
        });
        var totalScore = adjustedResults.map(function (r) { return r.score; }).reduce(function (prev, next) { return prev + next; });
        var adjustFactor = this.totalDesiredScore / totalScore;
        this.results = adjustedResults.map(function (r) {
            return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
        });
    };
    MergesortAlgorithmService.prototype.getTotalQuantityOfRounds = function (inputSize) {
        var blockSize = 1;
        var quantity = 0;
        while (blockSize < inputSize) {
            var fullBlocks = Math.floor(inputSize / blockSize);
            var fullBlockPairs = Math.floor(fullBlocks / 2);
            quantity += fullBlockPairs * (2 * blockSize - 1);
            var remainingElements = inputSize - fullBlockPairs * blockSize * 2;
            if (remainingElements > blockSize) {
                quantity += remainingElements - 1;
            }
            blockSize *= 2;
        }
        return quantity;
    };
    MergesortAlgorithmService.prototype.copyArray = function (elements, mergedBlockStartIndex, mergedBlock) {
        var length = mergedBlock.length;
        for (var i = 0; i < length; i++) {
            elements[mergedBlockStartIndex + i] = mergedBlock[i];
        }
    };
    MergesortAlgorithmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MergesortAlgorithmService);
    return MergesortAlgorithmService;
}());



/***/ }),

/***/ "./src/app/algorithms/vote-selection.ts":
/*!**********************************************!*\
  !*** ./src/app/algorithms/vote-selection.ts ***!
  \**********************************************/
/*! exports provided: VoteSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteSelection", function() { return VoteSelection; });
var VoteSelection;
(function (VoteSelection) {
    VoteSelection[VoteSelection["OptionA"] = 0] = "OptionA";
    VoteSelection[VoteSelection["OptionB"] = 1] = "OptionB";
})(VoteSelection || (VoteSelection = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voting_voting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voting/voting.component */ "./src/app/voting/voting.component.ts");




var routes = [
    { path: '', component: _voting_voting_component__WEBPACK_IMPORTED_MODULE_3__["VotingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.param = { value: 'world' };
        this.title = 'angular-photo-contest';
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        // Use 'pt' if first browser language is either 'pt' or 'pt-BR'.
        translate.use(browserLang.match(/^pt/) ? 'pt' : 'en');
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _voting_voting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voting/voting.component */ "./src/app/voting/voting.component.ts");
/* harmony import */ var _photo_picker_photo_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-picker/photo-picker.component */ "./src/app/photo-picker/photo-picker.component.ts");
/* harmony import */ var _final_order_final_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./final-order/final-order.component */ "./src/app/final-order/final-order.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");












// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _voting_voting_component__WEBPACK_IMPORTED_MODULE_8__["VotingComponent"],
                _photo_picker_photo_picker_component__WEBPACK_IMPORTED_MODULE_9__["PhotoPickerComponent"],
                _final_order_final_order_component__WEBPACK_IMPORTED_MODULE_10__["FinalOrderComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_11__["IntroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/final-order/final-order.component.scss":
/*!********************************************************!*\
  !*** ./src/app/final-order/final-order.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-div {\n  display: inline-block;\n  margin: 4px;\n}\n\n.non-inline-div {\n  clear: left;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nimg {\n  max-width: 200px;\n  max-height: 200px;\n  height: auto;\n  width: auto;\n}\n\np.score {\n  margin: 0;\n  font-weight: 900;\n  margin-top: 10px;\n}\n\np.button {\n  text-align: center;\n}\n\na.button {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtb3JkZXIvVzpcXGFydGVcXGNvbXBldGljYW8gMDFcXHBob3RvLWNvbnRlc3Qvc3JjXFxhcHBcXGZpbmFsLW9yZGVyXFxmaW5hbC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmluYWwtb3JkZXIvZmluYWwtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmluYWwtb3JkZXIvZmluYWwtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLm5vbi1pbmxpbmUtZGl2IHtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxucC5zY29yZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxucC5idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIuaW5saW5lLWRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5ub24taW5saW5lLWRpdiB7XG4gIGNsZWFyOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5wLnNjb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5wLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYS5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/final-order/final-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/final-order/final-order.component.ts ***!
  \******************************************************/
/*! exports provided: FinalOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalOrderComponent", function() { return FinalOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form.service */ "./src/app/form.service.ts");



var FinalOrderComponent = /** @class */ (function () {
    function FinalOrderComponent(formService) {
        this.formService = formService;
    }
    FinalOrderComponent.prototype.ngOnInit = function () {
        this.formResult = this.getFormArray(this.results);
        this.formLink = this.formService.getFormLink(this.formResult);
    };
    FinalOrderComponent.prototype.getFormArray = function (results) {
        var length = 0;
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var result = _a[_i];
            length += result.photos.length;
        }
        var output = new Array(length);
        for (var _b = 0, _c = this.results; _b < _c.length; _b++) {
            var result = _c[_b];
            for (var _d = 0, _e = result.photos; _d < _e.length; _d++) {
                var photo = _e[_d];
                output[photo.index] = result.score;
            }
        }
        return output;
    };
    FinalOrderComponent.ctorParameters = function () { return [
        { type: _form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FinalOrderComponent.prototype, "results", void 0);
    FinalOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-final-order',
            template: __webpack_require__(/*! raw-loader!./final-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/final-order/final-order.component.html"),
            styles: [__webpack_require__(/*! ./final-order.component.scss */ "./src/app/final-order/final-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]])
    ], FinalOrderComponent);
    return FinalOrderComponent;
}());



/***/ }),

/***/ "./src/app/form.service.ts":
/*!*********************************!*\
  !*** ./src/app/form.service.ts ***!
  \*********************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var FormService = /** @class */ (function () {
    function FormService() {
        this.googleFormsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].formsUrl;
    }
    FormService.prototype.getFormLink = function (scores) {
        var result = this.googleFormsUrl;
        scores.forEach(function (score, _) {
            result = result.replace('=0', '=' + score);
        });
        return result;
    };
    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.scss":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #ffffff;\n  font-family: \"Trebuchet MS\", Verdana, Helvetica, Arial, sans-serif;\n  font-size: 1.1em;\n  line-height: 1.4;\n  background-color: #43423e;\n}\n\nbutton, a.button {\n  font-family: \"Trebuchet MS\";\n  background-color: #fdc566;\n  border: 0.1rem solid #fdc566;\n  margin: 0 auto;\n  left: 50%;\n  border-radius: 0.4rem;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  line-height: 3.8rem;\n  padding: 0 3rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\nbutton:hover, button:focus, a.button:hover, a.button:focus {\n  background-color: #ffffff;\n  border-color: #ffffff;\n  color: #fff;\n}\n\nli {\n  margin-bottom: 1.5rem;\n}\n\nul {\n  list-style: none;\n}\n\nh1, h2 {\n  text-align: center;\n  font-weight: 300;\n  letter-spacing: -0.1rem;\n  margin-bottom: 1.5rem;\n  margin-top: 0;\n}\n\nh1 {\n  font-size: 3rem;\n  line-height: 1.2;\n}\n\nh2 {\n  font-size: 2rem;\n  line-height: 1.25;\n}\n\ndiv.narrow {\n  max-width: 900px;\n  margin: auto;\n}\n\na {\n  color: #fdc566;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\np.button {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n\np.option-description {\n  font-weight: 900;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\na.language {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vVzpcXGFydGVcXGNvbXBldGljYW8gMDFcXHBob3RvLWNvbnRlc3Qvc3JjXFxhcHBcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludHJvL1c6XFxhcnRlXFxjb21wZXRpY2FvIDAxXFxwaG90by1jb250ZXN0L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksY0FIYztFQUlqQixrRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQyx5QkFBQTtBQ0xGOztBRFFBO0VBQ0ksMkJBQUE7RUFDQSx5QkFiWTtFQWNaLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDSCxxQkFBQTtFQUNBLFdBbkJlO0VBb0JmLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0cscUJBQUE7QUNMSjs7QURNSTtFQUNJLHlCQTVCVTtFQTZCaEIscUJBN0JnQjtFQThCaEIsV0FoQ2M7QUM0QmhCOztBRFFBO0VBQ0kscUJBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEUUE7RUFDQyxrQkFBQTtFQUNHLGdCQUFBO0VBQ0gsdUJBQUE7RUFDQSxxQkFBQTtFQUNHLGFBQUE7QUNMSjs7QURRQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ0xEOztBRFFBO0VBQ0MsZUFBQTtFQUNHLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTtFQUNDLGNBbkVlO0VBb0VmLHFCQUFBO0FDTEQ7O0FETUM7RUFDQywwQkFBQTtBQ0pGOztBQ25FQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEc0VKOztBQ25FQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRHNFSjs7QUNuRUE7RUFDSSxnQkFBQTtBRHNFSiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU29tZSBpZGVhcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9taWxsaWdyYW0vbWlsbGlncmFtXHJcblxyXG4kY29sb3ItaW5pdGlhbDogI2ZmZiAhZGVmYXVsdDtcclxuJGNvbG9yLXByaW1hcnk6ICNmZGM1NjYgIWRlZmF1bHQ7XHJcbiRjb2xvci1zZWNvbmRhcnk6ICNmZmZmZmYgIWRlZmF1bHQ7XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBWZXJkYW5hLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMS4xZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MjNlO1xyXG59XHJcblxyXG5idXR0b24sIGEuYnV0dG9uIHtcdFxyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGJvcmRlcjogLjFyZW0gc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDUwJTtcclxuXHRib3JkZXItcmFkaXVzOiAuNHJlbTtcclxuXHRjb2xvcjogJGNvbG9yLWluaXRpYWw7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAzLjhyZW07XHJcblx0cGFkZGluZzogMCAzLjByZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG5cdFx0Y29sb3I6ICRjb2xvci1pbml0aWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogLS4xcmVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRmb250LXNpemU6IDNyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG59XHJcblxyXG5kaXYubmFycm93IHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG5cdGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Jjpob3ZlciB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcbn1cclxuIiwiYm9keSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDIzZTtcbn1cblxuYnV0dG9uLCBhLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjNTY2O1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZmRjNTY2O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBsaW5lLWhlaWdodDogMy44cmVtO1xuICBwYWRkaW5nOiAwIDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYnV0dG9uOmhvdmVyLCBidXR0b246Zm9jdXMsIGEuYnV0dG9uOmhvdmVyLCBhLmJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmgxLCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cblxuZGl2Lm5hcnJvdyB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmRjNTY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnAuYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5wLm9wdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuYS5sYW5ndWFnZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5wLmJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxucC5vcHRpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmEubGFuZ3VhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var IntroComponent = /** @class */ (function () {
    function IntroComponent(translateService) {
        this.translateService = translateService;
        this.choseAlgorithm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    IntroComponent.prototype.ngOnInit = function () { };
    IntroComponent.prototype.changeLanguage = function (language) {
        this.translateService.use(language);
    };
    IntroComponent.prototype.chooseAlgorithm = function (algorithm) {
        this.choseAlgorithm.emit(algorithm);
    };
    IntroComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], IntroComponent.prototype, "mergeSortQuantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], IntroComponent.prototype, "eliminationQuantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntroComponent.prototype, "choseAlgorithm", void 0);
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/intro/intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/photo-picker/photo-picker.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/photo-picker/photo-picker.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option {\n  float: left;\n  margin: 10px;\n  max-width: 100%;\n}\n\ninput {\n  max-width: 100%;\n  max-height: 800px;\n}\n\n@media (min-width: 800px) {\n  .option {\n    max-width: 45%;\n  }\n}\n\np {\n  text-align: center;\n  font-size: 1.2em;\n}\n\np.remaining {\n  font-weight: 900;\n  font-size: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tcGlja2VyL1c6XFxhcnRlXFxjb21wZXRpY2FvIDAxXFxwaG90by1jb250ZXN0L3NyY1xcYXBwXFxwaG90by1waWNrZXJcXHBob3RvLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8tcGlja2VyL3Bob3RvLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGNBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tcGlja2VyL3Bob3RvLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0IHsgICAgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7ICBcclxuICAgIC5vcHRpb24ge1xyXG4gICAgICAgIG1heC13aWR0aDogNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAmLnJlbWFpbmluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgfVxyXG59IiwiLm9wdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLm9wdGlvbiB7XG4gICAgbWF4LXdpZHRoOiA0NSU7XG4gIH1cbn1cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5wLnJlbWFpbmluZyB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/photo-picker/photo-picker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-picker/photo-picker.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPickerComponent", function() { return PhotoPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ "./src/app/photo.ts");



var PhotoPickerComponent = /** @class */ (function () {
    function PhotoPickerComponent() {
        this.votedForPhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PhotoPickerComponent.prototype.ngOnInit = function () { };
    PhotoPickerComponent.prototype.vote = function (photo) {
        if (photo != 'a' && photo != 'b') {
            throw new Error("Unknown photo parameter.");
        }
        this.votedForPhoto.emit(photo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _photo__WEBPACK_IMPORTED_MODULE_2__["Photo"])
    ], PhotoPickerComponent.prototype, "photoA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _photo__WEBPACK_IMPORTED_MODULE_2__["Photo"])
    ], PhotoPickerComponent.prototype, "photoB", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PhotoPickerComponent.prototype, "quantityOfRemainingRounds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoPickerComponent.prototype, "votedForPhoto", void 0);
    PhotoPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-picker',
            template: __webpack_require__(/*! raw-loader!./photo-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/photo-picker/photo-picker.component.html"),
            styles: [__webpack_require__(/*! ./photo-picker.component.scss */ "./src/app/photo-picker/photo-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotoPickerComponent);
    return PhotoPickerComponent;
}());



/***/ }),

/***/ "./src/app/photo.ts":
/*!**************************!*\
  !*** ./src/app/photo.ts ***!
  \**************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
var Photo = /** @class */ (function () {
    function Photo() {
    }
    return Photo;
}());



/***/ }),

/***/ "./src/app/photos.service.ts":
/*!***********************************!*\
  !*** ./src/app/photos.service.ts ***!
  \***********************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var PhotosService = /** @class */ (function () {
    function PhotosService() {
        this.photos = new Array();
        for (var i = 0; i < _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].numberOfPhotos; i++) {
            this.photos.push({ index: i, filePath: i.toString() });
        }
    }
    PhotosService.prototype.getPhotos = function () {
        return this.photos;
    };
    PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotosService);
    return PhotosService;
}());



/***/ }),

/***/ "./src/app/voting/voting.component.scss":
/*!**********************************************!*\
  !*** ./src/app/voting/voting.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGluZy92b3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/voting/voting.component.ts":
/*!********************************************!*\
  !*** ./src/app/voting/voting.component.ts ***!
  \********************************************/
/*! exports provided: VotingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function() { return VotingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/vote-selection */ "./src/app/algorithms/vote-selection.ts");
/* harmony import */ var _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/elimination/elimination-algorithm.service */ "./src/app/algorithms/elimination/elimination-algorithm.service.ts");
/* harmony import */ var _photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photos.service */ "./src/app/photos.service.ts");
/* harmony import */ var _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithms/mergesort/mergesort-algorithm.service */ "./src/app/algorithms/mergesort/mergesort-algorithm.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var VotingComponent = /** @class */ (function () {
    function VotingComponent() {
        this.numberOfPhotos = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].numberOfPhotos;
    }
    VotingComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    VotingComponent.prototype.onChoseAlgorithm = function (algorithm) {
        if (algorithm != "mergesort" && algorithm != "elimination") {
            throw new Error("Unknown algorithm parameter.");
        }
        if (algorithm == "mergesort") {
            this.algorithm = new _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__["MergesortAlgorithmService"]();
        }
        if (algorithm == "elimination") {
            this.algorithm = new _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["EliminationAlgorithmService"]();
        }
        var photoIndexArray = Array.from(Array(this.numberOfPhotos).keys());
        this.shuffleArray(photoIndexArray);
        this.algorithm.initialize(photoIndexArray);
        this.votingAlgorithmSelected = true;
        this.updateView();
    };
    VotingComponent.prototype.onVoted = function (photo) {
        this.applyVote(photo);
    };
    VotingComponent.prototype.initialize = function () {
        this.isFinished = false;
        this.votingAlgorithmSelected = false;
        this.mergeSortQuantitity =
            new _algorithms_mergesort_mergesort_algorithm_service__WEBPACK_IMPORTED_MODULE_5__["MergesortAlgorithmService"]().getInitialQuantityOfRounds(this.numberOfPhotos);
        this.eliminationQuantity =
            new _algorithms_elimination_elimination_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["EliminationAlgorithmService"]().getInitialQuantityOfRounds(this.numberOfPhotos);
        var photoService = new _photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]();
        this.photos = photoService.getPhotos();
    };
    VotingComponent.prototype.applyVote = function (votedForIndex) {
        if (votedForIndex == 'a') {
            this.algorithm.voteFor(_algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionA);
        }
        else if (votedForIndex == 'b') {
            this.algorithm.voteFor(_algorithms_vote_selection__WEBPACK_IMPORTED_MODULE_2__["VoteSelection"].OptionB);
        }
        else {
            // Add error.
            return;
        }
        this.updateView();
    };
    VotingComponent.prototype.updateView = function () {
        if (this.algorithm.getRemainingQuantityOfRounds() == 0) {
            this.isFinished = true;
            this.results = this.convertResult(this.algorithm.getResults());
            return;
        }
        var voteOptions = this.algorithm.getVoteOptions();
        this.photoA = this.photos[voteOptions.optionA];
        this.photoB = this.photos[voteOptions.optionB];
        this.quantityOfRemainingRounds = this.algorithm.getRemainingQuantityOfRounds();
    };
    VotingComponent.prototype.convertResult = function (results) {
        var output = {};
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (!output.hasOwnProperty(result.score)) {
                output[result.score] = { score: result.score, photos: new Array(0) };
            }
            output[result.score].photos.push(this.photos[result.elementIndex]);
        }
        return Object.values(output).reverse();
    };
    VotingComponent.prototype.shuffleArray = function (input) {
        var i, j, x;
        for (i = input.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = input[i];
            input[i] = input[j];
            input[j] = x;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VotingComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VotingComponent.prototype, "algorithm", void 0);
    VotingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voting',
            template: __webpack_require__(/*! raw-loader!./voting.component.html */ "./node_modules/raw-loader/index.js!./src/app/voting/voting.component.html"),
            styles: [__webpack_require__(/*! ./voting.component.scss */ "./src/app/voting/voting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VotingComponent);
    return VotingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    numberOfPhotos: 12,
    formsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_aBBI005lNZcfTaMFy2AEi_bzI4tJ75Bw0sOzzzGSwgrGYg/viewform?usp=pp_url&entry.468832349=0&entry.18502918=0&entry.1240903544=0&entry.2024966849=0&entry.1128203190=0&entry.1650137116=0&entry.407929624=0&entry.805346303=0&entry.307472477=0&entry.1709423003=0&entry.1115811744=0&entry.218112430=0"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\arte\competicao 01\photo-contest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map