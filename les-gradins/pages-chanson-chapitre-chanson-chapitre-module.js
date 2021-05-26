(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chanson-chapitre-chanson-chapitre-module"],{

/***/ "+uev":
/*!*******************************************************************!*\
  !*** ./src/app/pages/chanson-chapitre/chanson-chapitre.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChansonChapitreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChansonChapitreModule", function() { return ChansonChapitreModule; });
/* harmony import */ var _chanson_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chanson.service */ "h5SP");
/* harmony import */ var _chanson_chapitre_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chanson-chapitre-routing.module */ "WRnX");
/* harmony import */ var _chanson_chapitre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chanson-chapitre.component */ "WoBZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ChansonChapitreModule {
}
ChansonChapitreModule.ɵfac = function ChansonChapitreModule_Factory(t) { return new (t || ChansonChapitreModule)(); };
ChansonChapitreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChansonChapitreModule });
ChansonChapitreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_chanson_service__WEBPACK_IMPORTED_MODULE_0__["ChansonService"]], imports: [[_chanson_chapitre_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChansonChapitreRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChansonChapitreModule, { declarations: [_chanson_chapitre_component__WEBPACK_IMPORTED_MODULE_2__["ChansonChapitreComponent"]], imports: [_chanson_chapitre_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChansonChapitreRoutingModule"]], exports: [_chanson_chapitre_component__WEBPACK_IMPORTED_MODULE_2__["ChansonChapitreComponent"]] }); })();


/***/ }),

/***/ "WRnX":
/*!***************************************************************************!*\
  !*** ./src/app/pages/chanson-chapitre/chanson-chapitre-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChansonChapitreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChansonChapitreRoutingModule", function() { return ChansonChapitreRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chanson_bd_chanson_bd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chanson-bd/chanson-bd.component */ "0lmH");
/* harmony import */ var _chanson_photos_chanson_photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chanson-photos/chanson-photos.component */ "jkGu");
/* harmony import */ var _chanson_chapitre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chanson-chapitre.component */ "WoBZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _chanson_chapitre_component__WEBPACK_IMPORTED_MODULE_3__["ChansonChapitreComponent"] },
    { path: 'BD', component: _chanson_bd_chanson_bd_component__WEBPACK_IMPORTED_MODULE_1__["ChansonBdComponent"] },
    { path: 'Photos', component: _chanson_photos_chanson_photos_component__WEBPACK_IMPORTED_MODULE_2__["ChansonPhotosComponent"] }
];
class ChansonChapitreRoutingModule {
}
ChansonChapitreRoutingModule.ɵfac = function ChansonChapitreRoutingModule_Factory(t) { return new (t || ChansonChapitreRoutingModule)(); };
ChansonChapitreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ChansonChapitreRoutingModule });
ChansonChapitreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChansonChapitreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-chanson-chapitre-chanson-chapitre-module.js.map