"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_attend_attend_module_ts"],{

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

/***/ 7236:
/*!*************************************************!*\
  !*** ./src/app/attend/attend-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendPageRoutingModule": () => (/* binding */ AttendPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _attend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attend.page */ 414);




const routes = [
    {
        path: '',
        component: _attend_page__WEBPACK_IMPORTED_MODULE_0__.AttendPage
    }
];
let AttendPageRoutingModule = class AttendPageRoutingModule {
};
AttendPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AttendPageRoutingModule);



/***/ }),

/***/ 353:
/*!*****************************************!*\
  !*** ./src/app/attend/attend.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendPageModule": () => (/* binding */ AttendPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _attend_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attend-routing.module */ 7236);
/* harmony import */ var _attend_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attend.page */ 414);







let AttendPageModule = class AttendPageModule {
};
AttendPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _attend_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendPageRoutingModule
        ],
        declarations: [
            _attend_page__WEBPACK_IMPORTED_MODULE_1__.AttendPage,
            //ConfirmAttendComponent
        ]
    })
], AttendPageModule);



/***/ }),

/***/ 414:
/*!***************************************!*\
  !*** ./src/app/attend/attend.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendPage": () => (/* binding */ AttendPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_attend_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./attend.page.html */ 9579);
/* harmony import */ var _attend_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attend.page.scss */ 6010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _attend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attend.service */ 3561);





let AttendPage = class AttendPage {
    constructor(attendService) {
        this.attendService = attendService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.attendService.attend.subscribe(attend => {
            this.embeddedAttends = attend;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.attendService.getDbAttendData().subscribe(() => {
            this.isLoading = false;
        });
    }
    onCancelAttend(attendId, itemSliding) {
        itemSliding.close();
        this.attendService.cancelAttend(attendId).subscribe();
        console.log('Die Absage ist eingegangen!');
    }
    ngOnDestroy() {
        if (this.attendSubscription) {
            this.attendSubscription.unsubscribe();
        }
    }
};
AttendPage.ctorParameters = () => [
    { type: _attend_service__WEBPACK_IMPORTED_MODULE_2__.AttendService }
];
AttendPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-attend',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_attend_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attend_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AttendPage);



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

/***/ 9579:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/attend/attend.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Deine Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"!isLoading && (!embeddedAttends || embeddedAttends.length <= 0)\">\n        <p class=\"ion-text-center\">Momentan ist kein Eventbesuch geplant.</p>\n      </ion-col>\n      <ion-col *ngIf=\"!isLoading && embeddedAttends && embeddedAttends.length > 0\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let embeddedAttend of embeddedAttends\" #itemSliding>\n\n\n\n            <ion-item>\n              <ion-col size=\"3\"><ion-img [src]=\"embeddedAttend.locationImage\"></ion-img></ion-col>\n              <ion-col size=\"9\">\n                <ion-label class=\"spacing\">\n                  <h5>{{embeddedAttend.locationTitle}}</h5>\n                  <p>{{embeddedAttend.locationDate}}</p>\n                  <p>{{embeddedAttend.locationPrice}} €</p>\n                  <ion-button class=\"listing-btn\" [routerLink]=\"['/search/' + embeddedAttend.locationId]\"> Mehr Infos</ion-button>\n                </ion-label>\n              </ion-col>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click)=\"onCancelAttend(embeddedAttend.id, itemSliding)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 6010:
/*!*****************************************!*\
  !*** ./src/app/attend/attend.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_attend_attend_module_ts.js.map