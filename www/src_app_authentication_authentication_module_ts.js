"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 1448:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageRoutingModule": () => (/* binding */ AuthenticationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.page */ 9738);




const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPage
    }
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ 7658:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageModule": () => (/* binding */ AuthenticationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 1448);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page */ 9738);







let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPageRoutingModule
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPage]
    })
], AuthenticationPageModule);



/***/ }),

/***/ 9738:
/*!*******************************************************!*\
  !*** ./src/app/authentication/authentication.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPage": () => (/* binding */ AuthenticationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./authentication.page.html */ 1870);
/* harmony import */ var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page.scss */ 7861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 5004);






let AuthenticationPage = class AuthenticationPage {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.isLogin = true;
    }
    ngOnInit() { }
    onLogin() {
        this.authenticationService.login();
        console.log('Eingeloggt');
        this.router.navigateByUrl('/locations/search');
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        console.log(email, password);
        if (this.isLogin) {
            //Request an Server senden zum Anmelden
        }
        else {
            //Request an Server senden zum Registrieren
        }
    }
    onSwitch() {
        this.isLogin = !this.isLogin;
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthenticationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-authentication',
        template: _Users_annettemichel_Desktop_Webanwendung_Hausarbeit_Ryborsch_Michel_EventHour_node_modules_ngtools_webpack_src_loaders_direct_resource_js_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthenticationPage);



/***/ }),

/***/ 1870:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/authentication/authentication.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size=\"\" class=\"ion-text-center\">\n          <img class=\"logo-img\" src=\"../../assets/img/Logo.png\">\n          <h6>{{ isLogin ? 'Anmelden' : 'Registrieren'}}</h6>\n          <ion-list class=\"auth-check\">\n            <ion-item>\n              <ion-label position=\"floating\">E-mail</ion-label>\n              <ion-input type=\"email\" ngModel name=\"email\" required email #emailHint=\"ngModel\"></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" *ngIf=\"!emailHint.valid && emailHint.touched\">\n              <ion-label class=\"hint\">Emailadresse nicht korrekt</ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Passwort</ion-label>\n              <ion-input type=\"password\" ngModel name=\"password\" required minlength=\"4\" #passwordHint=\"ngModel\"></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" *ngIf=\"!passwordHint.valid && passwordHint.touched\">\n              <ion-label class=\"hint\">Mind. 4 Zeichen</ion-label>\n            </ion-item>\n\n          </ion-list>\n          <ion-button [disabled]=\"!form.valid\" type=\"submit\" color=\"primary\" expand=\"full\" (click)=\"onLogin()\">\n            {{ isLogin ? 'Anmelden' : 'Registrieren'}}\n        </ion-button>\n          <ion-button type=\"button\" color=\"primary\" fill=\"clear\" expand=\"full\" (click)=\"onSwitch()\">Hier {{ isLogin ? 'Registrieren' : 'Anmelden'}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n");

/***/ }),

/***/ 7861:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "img.logo-img {\n  height: auto;\n  width: 150px;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-list.auth-check {\n  margin-bottom: 35px;\n}\n\n.ion-invalid.ion-touched ion-label {\n  color: var(--ion-color-danger);\n}\n\nion-label.hint {\n  font-size: 12px !important;\n  margin: 0 !important;\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSw4QkFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBR0YiLCJmaWxlIjoiYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG59XG5pb24tZ3JpZHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXJvd3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWxpc3QuYXV0aC1jaGVjayB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pb24taW52YWxpZC5pb24tdG91Y2hlZCBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1sYWJlbC5oaW50IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map