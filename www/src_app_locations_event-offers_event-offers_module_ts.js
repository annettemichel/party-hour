"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_locations_event-offers_event-offers_module_ts"],{

/***/ 768:
/*!***********************************************************************!*\
  !*** ./src/app/locations/event-offers/event-offers-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventOffersPageRoutingModule": () => (/* binding */ EventOffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _event_offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-offers.page */ 6723);




const routes = [
    {
        path: '',
        component: _event_offers_page__WEBPACK_IMPORTED_MODULE_0__.EventOffersPage
    },
    {
        path: 'create-event',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_locations_event-offers_create-event_create-event_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-event/create-event.module */ 6810)).then(m => m.CreateEventPageModule)
    },
    {
        path: 'edit-event',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-event/edit-event.module */ 9014)).then(m => m.EditEventPageModule)
    }
];
let EventOffersPageRoutingModule = class EventOffersPageRoutingModule {
};
EventOffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventOffersPageRoutingModule);



/***/ }),

/***/ 7787:
/*!***************************************************************!*\
  !*** ./src/app/locations/event-offers/event-offers.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventOffersPageModule": () => (/* binding */ EventOffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _event_offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-offers-routing.module */ 768);
/* harmony import */ var _event_offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-offers.page */ 6723);







let EventOffersPageModule = class EventOffersPageModule {
};
EventOffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventOffersPageRoutingModule
        ],
        declarations: [_event_offers_page__WEBPACK_IMPORTED_MODULE_1__.EventOffersPage]
    })
], EventOffersPageModule);



/***/ }),

/***/ 6723:
/*!*************************************************************!*\
  !*** ./src/app/locations/event-offers/event-offers.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventOffersPage": () => (/* binding */ EventOffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-offers.page.html */ 5098);
/* harmony import */ var _event_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-offers.page.scss */ 1311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locations.service */ 1683);





let EventOffersPage = class EventOffersPage {
    constructor(locationService) {
        this.locationService = locationService;
    }
    onEdit(itemSliding) {
        itemSliding.close();
    }
    ngOnInit() {
        this.locationsSubscription = this.locationService.locations.subscribe((locations) => {
            this.eventOffers = locations;
        });
    }
    ionViewWillEnter() {
        this.locationService.getDbLocations().subscribe();
    }
    ngOnDestroy() {
        if (this.locationsSubscription) {
            this.locationsSubscription.unsubscribe();
        }
    }
};
EventOffersPage.ctorParameters = () => [
    { type: _locations_service__WEBPACK_IMPORTED_MODULE_2__.LocationsService }
];
EventOffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-event-offers',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_offers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventOffersPage);



/***/ }),

/***/ 5098:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locations/event-offers/event-offers.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Erstellte Events</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/event-offers/create-event\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item-sliding\n            *ngFor=\"let eventOffer of eventOffers.slice(0)\"\n            #itemSliding\n          >\n            <ion-item\n              [routerLink]=\"['/event-offers/edit-event/' + eventOffer.id]\"\n            >\n              <ion-col size=\"4\">\n                <ion-img [src]=\"eventOffer.imageUrl\"></ion-img>\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-label class=\"spacing\">\n                  <p class=\"listing-date\">{{eventOffer.date}}</p>\n                  <p>{{eventOffer.title}}</p>\n                  <p>\n                    {{eventOffer.genre}} &nbsp;|&nbsp; {{eventOffer.price}} €\n                  </p>\n                </ion-label>\n              </ion-col>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                color=\"primary\"\n                [routerLink]=\"['/event-offers/edit-event/' + eventOffer.id]\"\n                (click)=\"onEdit(itemSliding)\"\n              >\n                <ion-icon name=\"pencil\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n            <ion-item-options> </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 1311:
/*!***************************************************************!*\
  !*** ./src/app/locations/event-offers/event-offers.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1vZmZlcnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_locations_event-offers_event-offers_module_ts.js.map