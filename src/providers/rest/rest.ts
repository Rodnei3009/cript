import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {

  //apiUrl = 'https://jsonplaceholder.typicode.com/users';
  apiUrlPart1 = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
  apiUrlPart2 = '.SA&interval=15min&outputsize=compact&apikey=SUBSTITUA_SUA_KEY_AQUI';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
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
