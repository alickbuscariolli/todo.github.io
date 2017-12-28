webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigurationPage = (function () {
    function ConfigurationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfigurationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigurationPage');
    };
    ConfigurationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuration',template:/*ion-inline-start:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/configuration/configuration.html"*/'<!--\n  Generated template for the ConfigurationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>configuration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/configuration/configuration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfigurationPage);
    return ConfigurationPage;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configuration/configuration.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_configuration__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.todoList = __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_list__["a" /* TodoListPage */];
        this.configPage = __WEBPACK_IMPORTED_MODULE_2__configuration_configuration__["a" /* ConfigurationPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab tabTitle="To Do List" tabIcon="paper" [root]="todoList"></ion-tab>\n  <ion-tab tabTitle="Configuration"  tabIcon="settings" [root]="configPage"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_edit_activity_add_edit_activity__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activities__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListPage = (function () {
    function TodoListPage(navCtrl, navParams, activitiesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activitiesService = activitiesService;
        this.veryImpArray = false;
        this.impArray = false;
        this.notImpArray = false;
    }
    TodoListPage.prototype.ionViewWillEnter = function () {
        this.veryImportantList = this.activitiesService.getVeryImpList();
        this.importantList = this.activitiesService.getImpList();
        this.notImportantList = this.activitiesService.getNotImpList();
        this.checkAllArrays();
    };
    TodoListPage.prototype.checkAllArrays = function () {
        this.checkVeryImpArray(this.veryImportantList);
        this.checkImpArray(this.importantList);
        this.checkNotImpArray(this.notImportantList);
    };
    TodoListPage.prototype.checkVeryImpArray = function (array) {
        if (array.length > 0) {
            this.veryImpArray = true;
        }
        else {
            this.veryImpArray = false;
        }
    };
    TodoListPage.prototype.checkImpArray = function (array) {
        if (array.length > 0) {
            this.impArray = true;
        }
        else {
            this.impArray = false;
        }
    };
    TodoListPage.prototype.checkNotImpArray = function (array) {
        if (array.length > 0) {
            this.notImpArray = true;
        }
        else {
            this.notImpArray = false;
        }
    };
    TodoListPage.prototype.onNewActivity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_edit_activity_add_edit_activity__["a" /* AddEditActivityPage */], { mode: 'Add' });
    };
    TodoListPage.prototype.onDeleteActivity = function (array, index) {
        array.splice(index, 1);
        if (array == this.veryImportantList && array.length == 0) {
            this.activitiesService.removeVeryImpActivity(index);
            if (array.length == 0) {
                this.veryImpArray = false;
            }
        }
        else if (array == this.importantList) {
            this.activitiesService.removeImpActivity(index);
            if (array.length == 0) {
                this.impArray = false;
            }
        }
        else if (array == this.notImportantList) {
            this.activitiesService.removeNotImpActivity(index);
            if (array.length == 0) {
                this.notImpArray = false;
            }
        }
    };
    TodoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-list',template:/*ion-inline-start:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/todo-list/todo-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onNewActivity()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>To Do List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="contentBg">\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider *ngIf="veryImpArray" color="light">Very Important</ion-item-divider>\n      <ion-item-sliding *ngFor="let veryImpActivity of veryImportantList">\n        <ion-item>\n          <h3 class="veryImp">{{ veryImpActivity.name }}</h3>\n          <p>{{ veryImpActivity.description }}</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary">\n            <ion-icon name="text"></ion-icon>\n            Edit\n          </button>\n          <button ion-button color="danger" (click)="onDeleteActivity(veryImportantList, index)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider *ngIf="impArray" color="light">Important</ion-item-divider>\n      <ion-item-sliding *ngFor="let impActivity of importantList">\n        <ion-item>\n          <h3 class="imp">{{ impActivity.name }}</h3>\n          <p>{{ impActivity.description }}</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary">\n            <ion-icon name="text"></ion-icon>\n            Edit\n          </button>\n          <button ion-button color="danger" (click)="onDeleteActivity(importantList, index)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider *ngIf="notImpArray" color="light">Not Important</ion-item-divider>\n      <ion-item-sliding *ngFor="let notImpActivity of notImportantList">\n        <ion-item>\n          <h3 class="notImp">{{ notImpActivity.name }}</h3>\n          <p>{{ notImpActivity.description }}</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary">\n            <ion-icon name="text"></ion-icon>\n            Edit\n          </button>\n          <button ion-button color="danger" (click)="onDeleteActivity(notImportantList, index)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/todo-list/todo-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_activities__["a" /* ActivitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_activities__["a" /* ActivitiesService */]) === "function" && _c || Object])
    ], TodoListPage);
    return TodoListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=todo-list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activities__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditActivityPage = (function () {
    function AddEditActivityPage(navCtrl, navParams, activitiesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activitiesService = activitiesService;
        this.mode = 'New';
        this.levelOptions = ['Very Important', 'Important', 'Not Important'];
    }
    AddEditActivityPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Edit') {
            this.activity = this.navParams.get('activity');
            this.index = this.navParams.get('index');
        }
        this.initializeForm();
    };
    AddEditActivityPage.prototype.onSubmit = function () {
        var value = this.activityForm.value;
        if (this.mode == 'Edit') {
            this.activitiesService.updateActivity(this.index, value.name, value.description, value.level);
        }
        else {
            this.activitiesService.addActivity(value.name, value.description, value.level);
        }
        this.activityForm.reset();
        this.navCtrl.popToRoot;
    };
    AddEditActivityPage.prototype.initializeForm = function () {
        var name = null;
        var description = null;
        var level = 'Important';
        if (this.mode == 'Edit') {
            name = this.activity.name;
            description = this.activity.description;
            level = this.activity.level;
        }
        this.activityForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'level': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](level, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    AddEditActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-edit-activity',template:/*ion-inline-start:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/add-edit-activity/add-edit-activity.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ mode }} Activity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="activityForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Level</ion-label>\n        <ion-select formControlName="level">\n          <ion-option *ngFor="let option of levelOptions" [value]="option">{{ option }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block [disabled]="!activityForm.valid">{{ mode }} Activity</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/pages/add-edit-activity/add-edit-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_activities__["a" /* ActivitiesService */]])
    ], AddEditActivityPage);
    return AddEditActivityPage;
}());

//# sourceMappingURL=add-edit-activity.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_edit_activity_add_edit_activity__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_activities__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__["a" /* TodoListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_edit_activity_add_edit_activity__["a" /* AddEditActivityPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configuration/configuration.module#ConfigurationPageModule', name: 'ConfigurationPage', segment: 'configuration', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_todo_list_todo_list__["a" /* TodoListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_edit_activity_add_edit_activity__["a" /* AddEditActivityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_activities__["a" /* ActivitiesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ratobranco/Documents/coding/UDemy/Ionic/app-todo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = (function () {
    function Activity(name, description, level) {
        this.name = name;
        this.description = description;
        this.level = level;
    }
    return Activity;
}());

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_activity__ = __webpack_require__(275);

var ActivitiesService = (function () {
    function ActivitiesService() {
        this.activities = [];
        this.veryImportantList = [];
        this.importantList = [];
        this.notImportantList = [];
    }
    ActivitiesService.prototype.addActivity = function (name, description, level) {
        if (level == 'Very Important') {
            this.veryImportantList.push(new __WEBPACK_IMPORTED_MODULE_0__models_activity__["a" /* Activity */](name, description, level));
        }
        else if (level == 'Important') {
            this.importantList.push(new __WEBPACK_IMPORTED_MODULE_0__models_activity__["a" /* Activity */](name, description, level));
        }
        else if (level == 'Not Important') {
            this.notImportantList.push(new __WEBPACK_IMPORTED_MODULE_0__models_activity__["a" /* Activity */](name, description, level));
        }
        //this.activities.push(new Activity(name, description, level));
    };
    ActivitiesService.prototype.getVeryImpList = function () {
        return this.veryImportantList.slice();
    };
    ActivitiesService.prototype.getImpList = function () {
        return this.importantList.slice();
    };
    ActivitiesService.prototype.getNotImpList = function () {
        return this.notImportantList.slice();
    };
    // getActivity(){
    //   return this.activities.slice();
    // }
    ActivitiesService.prototype.updateActivity = function (index, name, description, level) {
        this.activities[index] = new __WEBPACK_IMPORTED_MODULE_0__models_activity__["a" /* Activity */](name, description, level);
    };
    ActivitiesService.prototype.removeVeryImpActivity = function (index) {
        this.veryImportantList.splice(index, 1);
    };
    ActivitiesService.prototype.removeImpActivity = function (index) {
        this.importantList.splice(index, 1);
    };
    ActivitiesService.prototype.removeNotImpActivity = function (index) {
        this.notImportantList.splice(index, 1);
    };
    return ActivitiesService;
}());

//# sourceMappingURL=activities.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map