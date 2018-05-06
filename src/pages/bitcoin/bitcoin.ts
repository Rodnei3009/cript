import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  btcFOX: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public BTC: RestProvider) {
    alert("aaa");
    this.getBTC();
  }

  getBTC() {
    alert("bbb");
    this.BTC.getBitcoin()
    .then(data => {
      alert("ddd");
      this.btcFOX = data;
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
