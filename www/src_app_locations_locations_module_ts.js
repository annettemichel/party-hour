"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_locations_locations_module_ts"],{

/***/ 4146:
/*!*******************************************************!*\
  !*** ./src/app/locations/locations-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageRoutingModule": () => (/* binding */ LocationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/authentication.guard */ 4558);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page */ 1660);





//Quelle: https://www.youtube.com/watch?v=0QlEavSZDB0
const routes = [
    {
        path: '',
        component: _locations_page__WEBPACK_IMPORTED_MODULE_1__.LocationsPage,
        children: [
            {
                /*----------- SEARCH-NAVIGATION ----------*/
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_locations_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 3331)).then(m => m.SearchPageModule)
                    },
                    {
                        path: ':locationId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_locations_search_locations-detail_locations-detail_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/locations-detail/locations-detail.module */ 5681)).then(m => m.LocationsDetailPageModule)
                    }
                ]
            },
            /*------------ EVENT-OFFERS-NAVIGATION -----------*/
            {
                path: 'event-offers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_locations_event-offers_event-offers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-offers/event-offers.module */ 7787)).then(m => m.EventOffersPageModule)
                    },
                    {
                        path: 'create-event',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_locations_event-offers_create-event_create-event_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-offers/create-event/create-event.module */ 6810)).then(m => m.CreateEventPageModule)
                    },
                    {
                        path: 'edit-event/:locationId',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./event-offers/edit-event/edit-event.module */ 9014)).then(m => m.EditEventPageModule)
                    }
                ]
            },
            {
                path: 'attend',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_attend_attend_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../attend/attend.module */ 353)).then(m => m.AttendPageModule),
                canLoad: [_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
            },
            {
                path: 'authentication',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../authentication/authentication.module */ 7658)).then(m => m.AuthenticationPageModule)
            },
            {
                path: '',
                redirectTo: 'locations/search',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'locations/search',
        pathMatch: 'full'
    }
];
let LocationsPageRoutingModule = class LocationsPageRoutingModule {
};
LocationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], LocationsPageRoutingModule);



/***/ }),

/***/ 4985:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPageModule": () => (/* binding */ LocationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations-routing.module */ 4146);
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page */ 1660);







let LocationsPageModule = class LocationsPageModule {
};
LocationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _locations_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationsPageRoutingModule
        ],
        declarations: [_locations_page__WEBPACK_IMPORTED_MODULE_1__.LocationsPage]
    })
], LocationsPageModule);



/***/ }),

/***/ 1660:
/*!*********************************************!*\
  !*** ./src/app/locations/locations.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsPage": () => (/* binding */ LocationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./locations.page.html */ 3644);
/* harmony import */ var _locations_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.page.scss */ 7554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ 5004);






let LocationsPage = class LocationsPage {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    onLogOut() {
        this.authenticationService.logout();
        console.log('Ausgeloggt');
        this.router.navigateByUrl('/authentication');
    }
    ngOnInit() { }
};
LocationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
LocationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-locations',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_locations_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationsPage);



/***/ }),

/***/ 3644:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locations/locations.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"welcome\">\n        <img class=\"logo-img\" src=\"../../assets/img/Logo.png\" />\n        <h2>Willkommen bei EventHour!</h2>\n        <p>Deine App zum Planen von Events!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"navigate-outline\"></ion-icon>\n      <ion-label>Suchen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"attend\">\n      <ion-icon name=\"checkbox-outline\"></ion-icon>\n      <ion-label>Teilnahme</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"event-offers\">\n      <ion-icon name=\"balloon-outline\"></ion-icon>\n      <ion-label>Events</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"authentication\" (click)=\"onLogOut()\">\n      <ion-icon name=\"log-out-outline\"></ion-icon>\n      <ion-label>Logout</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 7554:
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbnMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_locations_locations_module_ts.js.map