"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_locations_search_locations-detail_locations-detail_module_ts"],{

/***/ 2569:
/*!*********************************************!*\
  !*** ./src/app/attend/attend-data.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendData": () => (/* binding */ AttendData)
/* harmony export */ });
class AttendData {
    constructor(id, locationImage, locationDate, locationTitle, locationGenre, locationPrice, locationId, userId) {
        this.id = id;
        this.locationImage = locationImage;
        this.locationDate = locationDate;
        this.locationTitle = locationTitle;
        this.locationGenre = locationGenre;
        this.locationPrice = locationPrice;
        this.locationId = locationId;
        this.userId = userId;
    }
}


/***/ }),

/***/ 3561:
/*!******************************************!*\
  !*** ./src/app/attend/attend.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendService": () => (/* binding */ AttendService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/authentication.service */ 5004);
/* harmony import */ var _attend_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attend-data.model */ 2569);







let AttendService = class AttendService {
    constructor(authenticationService, httpClient) {
        this.authenticationService = authenticationService;
        this.httpClient = httpClient;
        this._attend = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get attend() {
        return this._attend.asObservable();
    }
    confirmAttend(locationId, locatonImage, locationDate, locationTitle, locationGenre, locationPrice) {
        let generatedId;
        const newAttendData = new _attend_data_model__WEBPACK_IMPORTED_MODULE_1__.AttendData(Math.random().toString(), locatonImage, locationDate, locationTitle, locationGenre, locationPrice, locationId, this.authenticationService.userId);
        return this.httpClient
            .post('https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData.json', Object.assign(Object.assign({}, newAttendData), { id: null }))
            .subscribe((data) => {
            newAttendData.id = data.name;
            this._attend.next(Object.values(this.attend).concat(newAttendData));
        });
    }
    getDbAttendData() {
        return this.httpClient
            .get(`https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData.json?orderBy="userId"&equalTo="${this.authenticationService.userId}"`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((responseData) => {
            const attends = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    attends.push(new _attend_data_model__WEBPACK_IMPORTED_MODULE_1__.AttendData(key, responseData[key].locationImage, responseData[key].locationDate, responseData[key].locationTitle, responseData[key].locationGenre, responseData[key].locationPrice, responseData[key].locationId, responseData[key].userId));
                }
            }
            return attends;
            // return [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((attends) => {
            this._attend.next(attends);
        }));
    }
    cancelAttend(attendId) {
        return this.httpClient
            .delete(`https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData/${attendId}.json`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
            return this.attend;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(attend => {
            this._attend.next(attend.filter(a => a.id !== attendId));
        }));
    }
};
AttendService.ctorParameters = () => [
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
AttendService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: 'root' })
], AttendService);



/***/ }),

/***/ 6013:
/*!*******************************************************************!*\
  !*** ./src/app/attend/confirm-attend/confirm-attend.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmAttendComponent": () => (/* binding */ ConfirmAttendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_attend_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirm-attend.component.html */ 9380);
/* harmony import */ var _confirm_attend_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-attend.component.scss */ 6415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);





let ConfirmAttendComponent = class ConfirmAttendComponent {
    constructor(mondalCtrl) {
        this.mondalCtrl = mondalCtrl;
    }
    ngOnInit() { }
    onClose() {
        this.mondalCtrl.dismiss(null, 'close');
    }
    onVisitEvent() {
        //TODO
        this.mondalCtrl.dismiss({ message: 'Hier ist ein Testmessage!' }, 'confirm');
    }
};
ConfirmAttendComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ConfirmAttendComponent.propDecorators = {
    selectedLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ConfirmAttendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-attend',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_attend_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_attend_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmAttendComponent);



/***/ }),

/***/ 8635:
/*!**************************************************************************************!*\
  !*** ./src/app/locations/search/locations-detail/locations-detail-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsDetailPageRoutingModule": () => (/* binding */ LocationsDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _locations_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations-detail.page */ 6261);




const routes = [
    {
        path: '',
        component: _locations_detail_page__WEBPACK_IMPORTED_MODULE_0__.LocationsDetailPage
    }
];
let LocationsDetailPageRoutingModule = class LocationsDetailPageRoutingModule {
};
LocationsDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationsDetailPageRoutingModule);



/***/ }),

/***/ 5681:
/*!******************************************************************************!*\
  !*** ./src/app/locations/search/locations-detail/locations-detail.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsDetailPageModule": () => (/* binding */ LocationsDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _locations_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations-detail-routing.module */ 8635);
/* harmony import */ var _locations_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations-detail.page */ 6261);
/* harmony import */ var _attend_confirm_attend_confirm_attend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../attend/confirm-attend/confirm-attend.component */ 6013);








let LocationsDetailPageModule = class LocationsDetailPageModule {
};
LocationsDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _locations_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationsDetailPageRoutingModule
        ],
        declarations: [
            _locations_detail_page__WEBPACK_IMPORTED_MODULE_1__.LocationsDetailPage,
            _attend_confirm_attend_confirm_attend_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmAttendComponent
        ]
    })
], LocationsDetailPageModule);



/***/ }),

/***/ 6261:
/*!****************************************************************************!*\
  !*** ./src/app/locations/search/locations-detail/locations-detail.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsDetailPage": () => (/* binding */ LocationsDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./locations-detail.page.html */ 7667);
/* harmony import */ var _locations_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations-detail.page.scss */ 1296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _attend_attend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../attend/attend.service */ 3561);
/* harmony import */ var _attend_confirm_attend_confirm_attend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../attend/confirm-attend/confirm-attend.component */ 6013);
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locations.service */ 1683);









let LocationsDetailPage = class LocationsDetailPage {
    constructor(router, navCtrl, route, locationService, modalCtrl, attendService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.locationService = locationService;
        this.modalCtrl = modalCtrl;
        this.attendService = attendService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('locationId')) {
                this.navCtrl.navigateBack('/search');
                return;
            }
            this.isLoading = true;
            this.locationsSubscription = this.locationService
                .getLocation(paramMap.get('locationId'))
                .subscribe((location) => {
                this.location = location;
                this.isLoading = false;
            });
        });
    }
    onVisitEvent() {
        this.modalCtrl
            .create({
            component: _attend_confirm_attend_confirm_attend_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmAttendComponent,
            componentProps: { selectedLocation: this.location },
        })
            .then((modalElement) => {
            modalElement.present();
            return modalElement.onDidDismiss();
        })
            .then((resultData) => {
            if (resultData.role === 'confirm') {
                this.attendService.confirmAttend(this.location.id, this.location.imageUrl, this.location.date, this.location.title, this.location.genre, this.location.price);
                console.log('Teilgenommen!');
            }
        });
    }
    ngOnDestroy() {
        if (this.locationsSubscription) {
            this.locationsSubscription.unsubscribe();
        }
    }
};
LocationsDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _locations_service__WEBPACK_IMPORTED_MODULE_4__.LocationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _attend_attend_service__WEBPACK_IMPORTED_MODULE_2__.AttendService }
];
LocationsDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-locations-detail',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_locations_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_locations_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationsDetailPage);



/***/ }),

/***/ 9380:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/attend/confirm-attend/confirm-attend.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{selectedLocation.title}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onClose()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"welcome\" class=\"ion-padding\" class=\"ion-text-center\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col class=\"ion-padding\" size=\"12\">\n        <h1>{{selectedLocation.title}} besuchen!</h1>\n        <p>{{selectedLocation.description}}</p>\n        <p>{{selectedLocation.date}}</p>\n        <ion-button color=\"primary\" (click)=\"onVisitEvent()\" type=\"submit\">Jetzt Teilnehmen</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 7667:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locations/search/locations-detail/locations-detail.page.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/search\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{location?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img [src]=\"location.imageUrl\"></ion-img>\n  <ion-grid class=\"ion-padding\" *ngIf =\"!isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"detail-space\">\n        <p class=\"date\">{{location.date}}</p>\n        <h4>{{location.title}}</h4>\n        <p>{{location.description}}</p>\n        <p>Einlass: {{location.entrytime}} Uhr <br>\n           Eintritt: {{location.price}} Euro <br>\n           Genre: {{location.genre}}</p>\n        <a href=\"https://www.google.com/maps/place/{{location.position.address}}\">{{location.position.address}}</a>\n          <p></p><br>\n        <ion-button color=\"primary\" (click)=\"onVisitEvent()\">Teilnehmen</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 6415:
/*!*********************************************************************!*\
  !*** ./src/app/attend/confirm-attend/confirm-attend.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWF0dGVuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1296:
/*!******************************************************************************!*\
  !*** ./src/app/locations/search/locations-detail/locations-detail.page.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbnMtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_locations_search_locations-detail_locations-detail_module_ts.js.map