import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  btcFOXlast: number = 0;
  btcFOXopen: number = 0;
  btcFOXvar: string;
  btcFOXvarPercent: number = 0;
  btcFOXvarPercStr: string;

  btcFOXlast_12h: number = 0;
  btcFOXopen_12h: number = 0;
  btcFOXvar_12h: string;
  btcFOXvarPercent_12h: number = 0;
  btcFOXvarPercStr_12h: string;

  btcFOXlast_24h: number = 0;
  btcFOXopen_24h: number = 0;
  btcFOXvar_24h: string;
  btcFOXvarPercent_24h: number = 0;
  btcFOXvarPercStr_24h: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public BTC: RestProvider) {
    this.getBTC();
  }

  getBTC() {
    this.BTC.getBitcoin()
    .then(data => {
      alert('getBitcoin4');
      alert(data["ticker_1h"]["exchanges"]["FOX"]["open"]);
      alert(data["ticker_1h"].exchanges.FOX.last);
      this.btcFOXlast = data["ticker_1h"]["exchanges"]["FOX"]["last"];
      this.btcFOXopen = data["ticker_1h"]["exchanges"]["FOX"]["open"];
      this.btcFOXvar = (this.btcFOXlast - this.btcFOXopen).toFixed(2);
      this.btcFOXvarPercent = ((this.btcFOXlast/this.btcFOXopen)-1)*100;
      this.btcFOXvarPercStr = this.btcFOXvarPercent.toFixed(2) + "%"; 

      alert(data["ticker_12h"]["exchanges"]["FOX"]["open"]);
      this.btcFOXlast_12h = data["ticker_12h"]["exchanges"]["FOX"]["last"];
      this.btcFOXopen_12h = data["ticker_12h"]["exchanges"]["FOX"]["open"];
      this.btcFOXvar_12h = (this.btcFOXlast_12h - this.btcFOXopen_12h).toFixed(2);
      this.btcFOXvarPercent_12h = ((this.btcFOXlast_12h/this.btcFOXopen_12h)-1)*100;
      this.btcFOXvarPercStr_12h = this.btcFOXvarPercent_12h.toFixed(2) + "%";
      
      alert(data["ticker_24h"]["exchanges"]["FOX"]["open"]);
      this.btcFOXlast_24h = data["ticker_24h"]["exchanges"]["FOX"]["last"];
      this.btcFOXopen_24h = data["ticker_24h"]["exchanges"]["FOX"]["open"];
      this.btcFOXvar_24h = (this.btcFOXlast_24h - this.btcFOXopen_24h).toFixed(2);
      this.btcFOXvarPercent_24h = ((this.btcFOXlast_24h/this.btcFOXopen_24h)-1)*100;
      this.btcFOXvarPercStr_24h = this.btcFOXvarPercent_24h.toFixed(2) + "%";
      

      /*this.papel = data["Meta Data"]["2. Symbol"];

      const timeSeries = data["Time Series (15min)"];
      const timeSeriesKeys = (Object.keys(timeSeries)).sort();

      console.log(timeSeriesKeys);

      this.preco = timeSeries[timeSeriesKeys[timeSeriesKeys.length - 1]]["4. close"];
      this.atualizacao = timeSeriesKeys[timeSeriesKeys.length-1];

      this.arraySymbolRetorno.push({papel: this.papel, valor: this.preco, atualizacao: this.atualizacao });      
      this.cont = this.cont + 1;
      this.percentNum = this.cont / this.total * 100;
      this.percentStr = this.percentNum.toFixed(0).toString() + "%";
      */

    });
  }

}
