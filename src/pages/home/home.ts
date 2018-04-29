import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  papel: any;
  preco: any;
  arrayTime = [];
  items: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers("GOLL4");
  }

  getUsers(sigla) {
    this.restProvider.getUsers(sigla)
    .then(data => {
      this.users = data;
      this.papel = data["Meta Data"]["2. Symbol"];
      this.preco = data["Time Series (15min)"]["2018-04-27 15:45:00"]["4. close"];
      //this.arrayTime = data["Time Series (15min)"];
      //alert(data["Time Series (15min)"]);
      //alert(data["Meta Data"]["2. Symbol"]);
      //alert(data["Time Series (15min)"]["2018-04-27 15:45:00"]["4. close"]);
      console.log(this.users);
    });
  }

}
