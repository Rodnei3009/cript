import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  papel: any;
  preco: any;
  atualizacao: string;
  arraySymbolRetorno = [];
  
  arraySymbol = [
    {title: 'GOLL4'},
    {title: 'PETR4'},
    {title: 'RAIL3'},
    {title: 'BBAS3'},
    {title: 'SAPR11'},
    {title: 'ABEV3'},
    {title: 'BRFS3'},
    {title: 'CVCB3'},
    {title: 'ITSA4'},
    {title: 'EZTC3'},
    {title: 'VULC3'}
  ];

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public loadingCtrl: LoadingController) {
    let i=0;
    this.loading();
    for(i=0; i<this.arraySymbol.length; i++) {
      this.getUsers(this.arraySymbol[i].title);
      //alert(this.arraySymbol[i].title);
    }  
  }

  loading(){
    let load = this.loadingCtrl.create({
      //content:'Please Wait....',
      duration: 3000
    });
    load.present();
    
  }

  getUsers(sigla) {
    this.restProvider.getUsers(sigla)
    .then(data => {
      this.users = data;
      this.papel = data["Meta Data"]["2. Symbol"];

      const timeSeries = data["Time Series (15min)"];
      const timeSeriesKeys = (Object.keys(timeSeries)).sort();

      console.log(timeSeriesKeys);

      this.preco = timeSeries[timeSeriesKeys[timeSeriesKeys.length - 1]]["4. close"];
      this.atualizacao = timeSeriesKeys[timeSeriesKeys.length-1];

      this.arraySymbolRetorno.push({papel: this.papel, valor: this.preco, atualizacao: this.atualizacao });      

    });
  }

}
