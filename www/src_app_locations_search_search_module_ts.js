"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_locations_search_search_module_ts"],{

/***/ 8838:
/*!***********************************************************!*\
  !*** ./src/app/locations/search/search-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 3463);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    },
    {
        path: 'locations-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_locations_search_locations-detail_locations-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./locations-detail/locations-detail.module */ 5681)).then(m => m.LocationsDetailPageModule)
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 3331:
/*!***************************************************!*\
  !*** ./src/app/locations/search/search.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 8838);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 3463);







const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 3463:
/*!*************************************************!*\
  !*** ./src/app/locations/search/search.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.page.html */ 2373);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 2931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locations.service */ 1683);





let SearchPage = class SearchPage {
    constructor(locationsService) {
        this.locationsService = locationsService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.locationsSubscription = this.locationsService.locations.subscribe((locations) => {
            this.embedLocations = locations;
            this.listedEmbeddedLocations = this.embedLocations.slice(1);
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.locationsService.getDbLocations().subscribe(() => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        if (this.locationsSubscription) {
            this.locationsSubscription.unsubscribe();
        }
    }
};
SearchPage.ctorParameters = () => [
    { type: _locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-search',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 2373:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locations/search/search.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Events finden</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item *ngFor=\"let location of embedLocations.slice(0)\">\n            <ion-col size=\"4\">\n              <ion-img [src]=\"location.imageUrl\"></ion-img>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-label class=\"spacing\">\n                <p class=\"listing-date\">{{location.date}}</p>\n                <h2>{{location.title}}</h2>\n                <p>{{location.genre}} &nbsp;|&nbsp; {{location.price}} €</p>\n                <ion-button class=\"listing-btn\" [routerLink]=\"['/search/' + location.id]\"> Mehr Infos</ion-button>\n              </ion-label>\n            </ion-col>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 2931:
/*!***************************************************!*\
  !*** ./src/app/locations/search/search.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".date {\n  background: #cdcdcd;\n  display: inline-block;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRCIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGV7XG4gYmFja2dyb3VuZDogI2NkY2RjZDtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gcGFkZGluZzogNXB4IDE1cHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_locations_search_search_module_ts.js.map