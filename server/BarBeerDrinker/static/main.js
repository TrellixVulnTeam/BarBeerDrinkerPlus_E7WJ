(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinker_component_drinker_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinker-component/drinker-component.component */ "./src/app/drinker-component/drinker-component.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _beer_component_beer_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beer-component/beer-component.component */ "./src/app/beer-component/beer-component.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'drinkers/:drinkers',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_5__["DrinkerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinker_component_drinker_component_component__WEBPACK_IMPORTED_MODULE_4__["DrinkerComponentComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"]
    },
    {
        path: 'beer',
        pathMatch: 'full',
        component: _beer_component_beer_component_component__WEBPACK_IMPORTED_MODULE_7__["BeerComponentComponent"]
    },
    {
        path: 'beer/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__["BeerDetailsComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_9__["ModificationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bar Beer Drinker</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" routerLinkActive = \"active\">\r\n        <a class=\"nav-link\" routerLink =\"/bars\">Bars</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive = \"active\">\r\n        <a class=\"nav-link\" routerLink = \"/drinkers\">Drinkers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive = \"active\">\r\n        <a class=\"nav-link\" routerLink = \"/beer\" >Beers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive = \"active\">\r\n        <a class=\"nav-link\" routerLink = \"/modification\" >Modify Tables</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive = \"active\">\r\n        <a class=\"nav-link\" routerLink = \"/insight\">Insight</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinker_component_drinker_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drinker-component/drinker-component.component */ "./src/app/drinker-component/drinker-component.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beer_component_beer_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-component/beer-component.component */ "./src/app/beer-component/beer-component.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__["BarDetailsComponent"],
                _drinker_component_drinker_component_component__WEBPACK_IMPORTED_MODULE_8__["DrinkerComponentComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_9__["InsightComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__["BeerDetailsComponent"],
                _beer_component_beer_component_component__WEBPACK_IMPORTED_MODULE_11__["BeerComponentComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_12__["DrinkerDetailsComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_13__["ModificationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{ barName }}</h1>\r\n    <p class=\"bar-details\" *ngIf=\"barDetails\">\r\n      {{ barDetails?.city }} <span *ngIf=\"barDetails.city && barDetails.state\">| </span>{{ barDetails ?.state }}\r\n <br>\r\n      Weekday hours: {{ barDetails?.weekdayOpen }} <span *ngIf=\"barDetails.weekdayOpen && barDetails.weekdayClose\"> to </span>{{ barDetails?.weekdayClose }}\r\n      <br>\r\n      Weekend hours: {{ barDetails?.weekendOpen }} <span *ngIf=\"barDetails.weekendOpen && barDetails.weekendClose\"> to </span>{{ barDetails?.weekendClose }}\r\n\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"text-center font-weight-light\">Menu</h2>\r\n  <br>\r\n  <p-table [value]=\"menu\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Items</th>\r\n        <th>ItemType</th>\r\n        <th>Menufacturer</th>\r\n        <th>Price</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-items>\r\n      <tr>\r\n        <td>{{ items.item }}</td>\r\n        <td>{{ items.manufacturer }}</td>\r\n        <td>{{ items.itemType }}</td>\r\n        <td>{{ items.price | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <br>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"popularBeersGraph\">\r\n  <br>\r\n  <div id=\"popularBeersGraph\"></div>\r\n  <br><br>\r\n</div>\r\n\r\n<div class=\"largestSpendersGraph\">\r\n <br>\r\n <div id=\"barSpendersGraph\"></div>\r\n <br><br>\r\n</div>\r\n\r\n<div class=\"ManufacturersGraph\">\r\n <br>\r\n <div id=\"ManufacturersGraph\"></div>\r\n <br><br>\r\n</div>\r\n<div class=\"BarDistributionDayGraph\">\r\n <br>\r\n <div id=\"BarDistributionDayGraph\"></div>\r\n <br><br>\r\n</div>\r\n<div class=\"BarDistributionWeekGraph\">\r\n <br>\r\n <div id=\"BarDistributionWeekGraph\"></div>\r\n <br><br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console');
                }
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
            barService.getPopularBeers(_this.barName).subscribe(function (data) {
                var beers = [];
                var sold = [];
                data.sort(function (a, b) { return a.Amountsold < b.AmountSold ? 1 : a.AmountSold > b.AmountSold ? -1 : 0; });
                data.forEach(function (beer) {
                    sold.push(beer.AmountSold);
                    beers.push(beer.beers);
                });
                beers = beers.splice(0, 10);
                sold = sold.splice(0, 10);
                _this.renderBeerChart(sold, beers);
            });
            barService.getLargestSpenders(_this.barName).subscribe(function (data) {
                var drinkers = [];
                var spending = [];
                data.sort(function (a, b) { return a.spendingAmount < b.spendingAmount ? 1 : a.spendingAmount > b.spendingAmount ? -1 : 0; });
                data.forEach(function (drinker) {
                    drinkers.push(drinker.drinker);
                    spending.push(drinker.spendingAmount);
                });
                drinkers = drinkers.splice(0, 20);
                spending = spending.splice(0, 20);
                _this.renderChart(drinkers, spending);
            });
            barService.getManufacturerSells(_this.barName).subscribe(function (data) {
                var manufacturers = [];
                var beerSold = [];
                data.sort(function (a, b) { return a.BeersSold < b.BeersSold ? 1 : a.BeersSold > b.BeersSold ? -1 : 0; });
                data.forEach(function (manu) {
                    manufacturers.push(manu.Manufacturer);
                    beerSold.push(manu.BeersSold);
                });
                manufacturers = manufacturers.splice(0, 5);
                beerSold = beerSold.splice(0, 5);
                _this.renderManuChart(manufacturers, beerSold);
            });
            barService.getBarTimeDistributionDay(_this.barName).subscribe(function (data) {
                console.log(data);
                var time = [];
                var orders = [];
                data.forEach(function (bar) {
                    time.push(bar.hour);
                    orders.push(bar.avgT);
                });
                console.log(time);
                console.log(orders);
                _this.renderBarDistributionDay(time, orders);
            });
            barService.getBarTimeDistributionWeek(_this.barName).subscribe(function (data) {
                console.log(data);
                var time = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                var orders = [];
                data.forEach(function (bar) {
                    orders.push(bar.avgT);
                });
                _this.renderBarDistributionWeek(time, orders);
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.renderBarDistributionWeek = function (time, orders) {
        Highcharts.chart('BarDistributionWeekGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Busiest Times of the Week'
            },
            xAxis: {
                categories: time,
                title: {
                    text: 'Day Of the Week'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Orders'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: orders
                }]
        });
    };
    BarDetailsComponent.prototype.renderBarDistributionDay = function (time, orders) {
        Highcharts.chart('BarDistributionDayGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Busiest Times of the Day'
            },
            xAxis: {
                categories: time,
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Orders'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: orders
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart = function (drinkers, spending) {
        Highcharts.chart('barSpendersGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Largest Spenders'
            },
            xAxis: {
                categories: drinkers,
                title: {
                    text: 'Drinkers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount drinker spends at this bar'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: spending
                }]
        });
    };
    BarDetailsComponent.prototype.renderManuChart = function (manufacturers, beerSold) {
        Highcharts.chart('ManufacturersGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Manufacturers'
            },
            xAxis: {
                categories: manufacturers,
                title: {
                    text: 'Manufacturers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Beers Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: beerSold
                }]
        });
    };
    BarDetailsComponent.prototype.renderBeerChart = function (sold, beers) {
        Highcharts.chart('popularBeersGraph', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Most Popular Beers Sold'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: sold
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService.prototype.getLargestSpenders = function (bar) {
        return this.http.get('/api/large-spenders/' + bar);
    };
    BarsService.prototype.getPopularBeers = function (bar) {
        return this.http.get('/api/popular-beers/' + bar);
    };
    BarsService.prototype.getManufacturerSells = function (bar) {
        return this.http.get('/api/manufacturer-sells/' + bar);
    };
    BarsService.prototype.getBarTimeDistributionDay = function (bar) {
        return this.http.get('/api/bar_time_distribution_day/' + bar);
    };
    BarsService.prototype.getBarTimeDistributionWeek = function (bar) {
        return this.http.get('/api/bar_time_distribution_week/' + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-component/beer-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/beer-component/beer-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItY29tcG9uZW50L2JlZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beer-component/beer-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/beer-component/beer-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Beers</h1>\r\n    <p class=\"lead\">Here are the beers avaialble at the various bars</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class =\"container\">\r\n\r\n  <p-table [value]=\"beers\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th scope=\"col\">Beer</th>\r\n        <th scope=\"col\">Manufacturer</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-beer>\r\n      <tr>\r\n        <td>\r\n          <a routerLink =\"/beer/{{ beer.name }}\">\r\n            {{ beer.name }}\r\n          </a>\r\n        </td>\r\n        <td>{{ beer.manufacturer }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/beer-component/beer-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/beer-component/beer-component.component.ts ***!
  \************************************************************/
/*! exports provided: BeerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerComponentComponent", function() { return BeerComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beer.service */ "./src/app/beer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerComponentComponent = /** @class */ (function () {
    function BeerComponentComponent(beerService) {
        this.beerService = beerService;
    }
    BeerComponentComponent.prototype.ngOnInit = function () {
        this.getBeers();
    };
    BeerComponentComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve a list of beers');
        });
    };
    BeerComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-component',
            template: __webpack_require__(/*! ./beer-component.component.html */ "./src/app/beer-component/beer-component.component.html"),
            styles: [__webpack_require__(/*! ./beer-component.component.css */ "./src/app/beer-component/beer-component.component.css")]
        }),
        __metadata("design:paramtypes", [_beer_service__WEBPACK_IMPORTED_MODULE_1__["BeerService"]])
    ], BeerComponentComponent);
    return BeerComponentComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{ beerName }}</h1>\r\n    <p class=\"beer-details\" *ngIf=\"beerDetails\">\r\n      Made  by <i>{{ beerDetails.manufacturer }}</i>\r\n    </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"BestSellingLocationsGraph\">\r\n   <br>\r\n   <div id=\"BestSellingLocationsGraph\"></div>\r\n   <br><br>\r\n  </div>\r\n\r\n  <div class=\"TopConsumersGraph\">\r\n   <br>\r\n   <div id=\"TopConsumersGraph\"></div>\r\n   <br><br>\r\n  </div>\r\n  <div class=\"BeerDistributionGraph\">\r\n   <br>\r\n   <div id=\"BeerDistributionGraph\"></div>\r\n   <br><br>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beer.service */ "./src/app/beer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Beer not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser consolemmmmmmm');
                }
            });
            beerService.getTopConsumers(_this.beerName).subscribe(function (data) {
                var drinkers = [];
                var consumed = [];
                data.sort(function (a, b) { return a.AmountConsumed < b.AmountConsumed ? 1 : a.AmountConsumed > b.AmountConsumed ? -1 : 0; });
                data.forEach(function (drinker) {
                    drinkers.push(drinker.Drinker);
                    consumed.push(drinker.AmountConsumed);
                });
                drinkers = drinkers.splice(0, 10);
                consumed = consumed.splice(0, 10);
                _this.renderTopConsumersChart(drinkers, consumed);
            });
            beerService.getBestSellingLocations(_this.beerName).subscribe(function (data) {
                var bars = [];
                var sold = [];
                data.sort(function (a, b) { return a.NumberSold < b.NumberSold ? 1 : a.NumberSold > b.NumberSold ? -1 : 0; });
                data.forEach(function (bar) {
                    sold.push(bar.NumberSold);
                    bars.push(bar.Bar);
                });
                bars = bars.splice(0, 10);
                sold = sold.splice(0, 10);
                _this.renderBestSellingLocationsChart(bars, sold);
            });
            beerService.getBeerTimeDistribution(_this.beerName).subscribe(function (data) {
                console.log(data);
                var quantity = [];
                var time = [];
                data.forEach(function (beer) {
                    time.push(beer.hour);
                    quantity.push(beer.avgT);
                });
                _this.renderBeerDistribution(quantity, time);
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.renderBestSellingLocationsChart = function (bars, sold) {
        Highcharts.chart('BestSellingLocationsGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Best Selling Locations For This Beer'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bars'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Sold at Each Bar'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: sold
                }]
        });
    };
    BeerDetailsComponent.prototype.renderBeerDistribution = function (time, quantity) {
        Highcharts.chart('BeerDistributionGraph', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Time when this beer sells the most'
            },
            xAxis: {
                categories: quantity,
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Quantity'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: time
                }]
        });
    };
    BeerDetailsComponent.prototype.renderTopConsumersChart = function (drinkers, consumed) {
        Highcharts.chart('TopConsumersGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Consumers of this Beer'
            },
            xAxis: {
                categories: drinkers,
                title: {
                    text: 'Drinkers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Sold at Each Bar'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: consumed
                }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beer_service__WEBPACK_IMPORTED_MODULE_2__["BeerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beer.service.ts":
/*!*********************************!*\
  !*** ./src/app/beer.service.ts ***!
  \*********************************/
/*! exports provided: BeerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerService", function() { return BeerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerService = /** @class */ (function () {
    function BeerService(http) {
        this.http = http;
    }
    BeerService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeerService.prototype.getBeer = function (beer) {
        return this.http.get('api/beer/' + beer);
    };
    BeerService.prototype.getBestSellingLocations = function (beer) {
        return this.http.get('api/best-selling-locations/' + beer);
    };
    BeerService.prototype.getTopConsumers = function (beer) {
        return this.http.get('api/top_consumers/' + beer);
    };
    BeerService.prototype.getBeerTimeDistribution = function (beer) {
        return this.http.get('api/beers_time_distribution/' + beer);
    };
    BeerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeerService);
    return BeerService;
}());



/***/ }),

/***/ "./src/app/drinker-component/drinker-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/drinker-component/drinker-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItY29tcG9uZW50L2RyaW5rZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinker-component/drinker-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/drinker-component/drinker-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Bar Beer Drinker</h1>\n    <p class=\"lead\">This application will let help guide you through our Bar Beer Drinker Database.</p>\n  </div>\n</div>\n\n\n<div class =\"container\">\n\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Phone</th>\n        <th scope=\"col\">City</th>\n        <th scope=\"col\">State</th>\n        <th scope=\"col\">addr</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n      <tr>\n        <td>\n          <a routerLink =\"/drinkers/{{ drinker.name }}\">\n            {{ drinker.name }}\n          </a>\n        </td>\n        <td>{{ drinker.phone  }}</td>\n        <td>{{ drinker.city }}</td>\n        <td>{{ drinker.state }}</td>\n        <td>{{ drinker.addr }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<br><br>\n"

/***/ }),

/***/ "./src/app/drinker-component/drinker-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/drinker-component/drinker-component.component.ts ***!
  \******************************************************************/
/*! exports provided: DrinkerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerComponentComponent", function() { return DrinkerComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerComponentComponent = /** @class */ (function () {
    function DrinkerComponentComponent(DrinkersService) {
        this.DrinkersService = DrinkersService;
    }
    DrinkerComponentComponent.prototype.ngOnInit = function () {
        this.getDrinkers();
    };
    DrinkerComponentComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.DrinkersService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    DrinkerComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-component',
            template: __webpack_require__(/*! ./drinker-component.component.html */ "./src/app/drinker-component/drinker-component.component.html"),
            styles: [__webpack_require__(/*! ./drinker-component.component.css */ "./src/app/drinker-component/drinker-component.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkerComponentComponent);
    return DrinkerComponentComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ drinkerName }}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n      {{ drinkerDetails?.city }} <span *ngIf=\"drinkerDetails.city && drinkerDetails.state\">| </span>{{ drinkerDetails ?.state }}\n <br>\n    </p>\n  </div>\n</div>\n\n<div class =\"container\">\n\n  <p-table [value]=\"drinkerTransactions\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th scope=\"col\">Bar</th>\n        <th scope=\"col\">Transaction ID</th>\n        <th scope=\"col\">Time</th>\n        <th scope=\"col\">Total</th>\n        <th scope=\"col\">Tip</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker_transaction>\n      <tr>\n        <td>\n            {{ drinker_transaction.bar }}\n        </td>\n        <td>{{ drinker_transaction.transactionID  }}</td>\n        <td>{{ drinker_transaction.time }}</td>\n        <td>${{ drinker_transaction.total }}</td>\n        <td>${{ drinker_transaction.tip }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<div class=\"mostBeersChart\">\n  <br>\n  <div id=\"mostBeersChart\"></div>\n  <br><br>\n</div>\n<!-- <div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Menu</h2>\n  <br>\n  <p-table [value]=\"menu\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Items</th>\n        <th>ItemType</th>\n        <th>Menufacturer</th>\n        <th>Price</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-items>\n      <tr>\n        <td>{{ items.item }}</td>\n        <td>{{ items.manufacturer }}</td>\n        <td>{{ items.itemType }}</td>\n        <td>{{ items.price | currency }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br>\n  <br>\n</div> -->\n\n<!-- <div class=\"popularBeersGraph\">\n  <br>\n  <div id=\"popularBeersGraph\"></div>\n  <br><br>\n</div>\n\n<div class=\"largestSpendersGraph\">\n <br>\n <div id=\"barSpendersGraph\"></div>\n <br><br>\n</div>\n\n<div class=\"ManufacturersGraph\">\n <br>\n <div id=\"ManufacturersGraph\"></div>\n <br><br>\n</div> -->\n<br><br>\n"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkersService, route) {
        var _this = this;
        this.drinkersService = drinkersService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinkers');
            drinkersService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console');
                }
            });
            drinkersService.getDrinkerTransactions(_this.drinkerName).subscribe(function (data) {
                _this.drinkerTransactions = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console');
                }
            });
            drinkersService.getDrinkerMostBeers(_this.drinkerName).subscribe(function (data) {
                var beers = [];
                var quantity = [];
                _this.drinkerMostBeers = data;
                data.sort(function (a, b) { return a.quantity < b.quantity ? 1 : a.quantity > b.quantity ? -1 : 0; });
                console.log(data);
                data.forEach(function (beer) {
                    beers.push(beer.beer);
                    quantity.push(beer.quantity);
                });
                console.log(beers);
                console.log(quantity);
                beers = beers.splice(0, 10);
                quantity = quantity.splice(0, 10);
                _this.renderMostBeersChart(beers, quantity);
            });
            // barService.getPopularBeers(this.barName).subscribe(
            //   data => {
            //     console.log(data);
            //     var beers = [];
            //     var sold = [];
            //     data.sort((a, b) => a.Amountsold < b.AmountSold ? 1 : a.AmountSold > b.AmountSold ? -1 : 0)
            //     data.forEach(beer => {
            //       sold.push(beer.AmountSold);
            //       beers.push(beer.beers);
            //     }
            //   );
            //   beers = beers.splice(0,10);
            //   sold = sold.splice(0,10);
            //   this.renderBeerChart(sold, beers);
            // });
            //   barService.getLargestSpenders(this.barName).subscribe(
            //     data => {
            //       console.log(data);
            //       var drinkers = [];
            //       var spending = [];
            //       data.sort((a, b) => a.spendingAmount < b.spendingAmount ? 1 : a.spendingAmount > b.spendingAmount ? -1 : 0)
            //       data.forEach(drinker => {
            //         drinkers.push(drinker.drinker);
            //         spending.push(drinker.spendingAmount);
            //
            //       }
            //   );
            //   drinkers = drinkers.splice(0,20);
            //   spending = spending.splice(0,20);
            //   this.renderChart(drinkers, spending);
            // });
            //   barService.getManufacturerSells(this.barName).subscribe(
            //     data => {
            //       console.log(data);
            //       var manufacturers = [];
            //       var beerSold = [];
            //       data.sort((a, b) => a.BeersSold < b.BeersSold ? 1 : a.BeersSold > b.BeersSold ? -1 : 0)
            //       data.forEach(manu => {
            //         manufacturers.push(manu.Manufacturer);
            //         beerSold.push(manu.BeersSold);
            //
            //       }
            //   );
            //   manufacturers = manufacturers.splice(0,5);
            //   beerSold = beerSold.splice(0,5);
            //   this.renderManuChart(manufacturers, beerSold);
            // });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderMostBeersChart = function (beers, quantity) {
        Highcharts.chart('mostBeersChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers Ordered Most'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Beers Bought'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: quantity
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinkers');
    };
    DrinkersService.prototype.getDrinker = function (drinker) {
        return this.http.get('api/drinkers/' + drinker);
    };
    DrinkersService.prototype.getDrinkerTransactions = function (drinker) {
        return this.http.get('api/drinker_transactions/' + drinker);
    };
    DrinkersService.prototype.getDrinkerMostBeers = function (drinker) {
        return this.http.get('api/drinker_most_beers/' + drinker);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n <br>\r\n <div id=\"bargraph\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.frequentCount);
            });
            // use the line below to render the graph
            _this.renderChart(bars, counts);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/modification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modification.service.ts ***!
  \*****************************************/
/*! exports provided: ModificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationService", function() { return ModificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationService = /** @class */ (function () {
    function ModificationService(http) {
        this.http = http;
    }
    ModificationService.prototype.sendQuery = function (query) {
        return this.http.get('/api/send-query/' + query);
    };
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationService);
    return ModificationService;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Welcome to the Modification Page</h1>\r\n    <p class=\"modify\" *ngIf=\"modify\">\r\n"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modification.service */ "./src/app/modification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(modService, route) {
        this.modService = modService;
        this.route = route;
        this.clickMessage = '';
    }
    ModificationComponent.prototype.onClickMe = function (value) {
        var _this = this;
        if (value == '') {
            this.clickMessage = 'Please enter a query';
        }
        else {
            this.modService.sendQuery(value).subscribe(function (data) {
                _this.result = data;
                _this.clickMessage = _this.result.first;
            }, function (error) {
                alert('could not process query');
            });
        }
    };
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")],
            template: "\n  <br><br><br><br>\n  <input #query\n      (keyup.enter)=\"onClickMe(newHero.value)\"\n      (blur)=\"onClickMe(query.value); query.value=null\">\n    <button (click)=\"OnClickMe(query.value)\">Submit Query</button>\n    {{ clickMessage }}"
        }),
        __metadata("design:paramtypes", [_modification_service__WEBPACK_IMPORTED_MODULE_2__["ModificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Welcome to Bar Beer Drinker</h1>\r\n    <p class=\"lead\">This application will let help guide you through our Bar Beer Drinker Database.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class =\"container\">\r\n\r\n  <p-table [value]=\"bars\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">City</th>\r\n        <th scope=\"col\">State</th>\r\n        <th scope=\"col\">Weekday Opening</th>\r\n        <th scope=\"col\">Weekday Closing</th>\r\n        <th scope=\"col\">Weekend Opening</th>\r\n        <th scope=\"col\">Weekend Closing</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-bar>\r\n      <tr>\r\n        <td>\r\n          <a routerLink =\"/bars/{{ bar.name }}\">\r\n            {{ bar.name }}\r\n          </a>\r\n        </td>\r\n        <td>{{ bar.city  }}</td>\r\n        <td>{{ bar.state }}</td>\r\n        <td>{{ bar.weekdayOpen }}</td>\r\n        <td>{{ bar.weekdayClose }}</td>\r\n        <td>{{ bar.weekendOpen }}</td>\r\n        <td>{{ bar.weekendClose }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Kush\DatabasesProject\BarBeerDrinkerPlus\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map