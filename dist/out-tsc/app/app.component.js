import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.coins = [];
    }
    ngOnInit() {
        this.http
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .subscribe(res => {
            this.coins = res;
            let coin = this.coins.sort((c1, c2) => (c1.current_price < c2.current_price) ? 1 : (c1.current_price > c2.current_price) ? -1 : 0);
            console.log(this.coins);
        }, err => { console.log("error"); });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map