import { HttpClient /*, HttpHeaders */ } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  //apiUrl = 'https://jsonplaceholder.typicode.com/users';
  apiUrlPart1 = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
  apiUrlPart2 = '&interval=15min&outputsize=compact&apikey=SUBSTITUA_SUA_KEY_AQUI';

  apiBitcoin = 'http://api.bitvalor.com/v1/ticker.json';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getBitcoin() {
    
   /* let head = new HttpHeaders();
    head = head.append('Access-Control-Allow-Origin', '*');
    head = head.append('access-control-allow-methods', 'GET');
    head = head.set('Access-Control-Allow-Origin', '*');
    head = head.set('Content-Type', 'text/plain');
*/
    /* let head = new HttpHeaders()
    head.set('Content-Type', 'text/plain') */

    return new Promise(resolve => {
      this.http.get(this.apiBitcoin).subscribe(data => {
        console.log(data)
        resolve(data)
      }, err => console.log(err));
    });
  }

  getUsers(sigla) {
    return new Promise(resolve => {
      this.http.get(this.apiUrlPart1 + sigla + this.apiUrlPart2).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /*
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  */
 

}
