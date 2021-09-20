import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


interface coin{

  id:String,
  symbol:String,
  name:String,
  image:String,
  current_price:Number,
  price_change_percentage_24h:Number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  coins : coin [] = []

  constructor (private http: HttpClient ) {
  }
  ngOnInit() {
    this.http
    .get <coin[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .subscribe(res => {
      this.coins = res
      this.coins = this.coins.sort()
      console.log(this.coins)
    }
    , err => {console.log("error")})
  }
}
