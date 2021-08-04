import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreorderService {
  uri = 'http://localhost:4000/restaurant';

  constructor(private http: HttpClient) { }
  SearchRest(input) {
     return this.http.get(`${this.uri}/rest?name=${input}`);
   }
  ShowAll(){
    return this.http.get(`${this.uri}`);
  }
  getMenu(id) {
    return this.http.get(`${this.uri}/menupage/${id}`);
  }

  saveClient(fname,lname,email,contact,ordertype,cardItems,restId){
    const customer={
      fname: fname,
      lname: lname,
      email: email,
      contact: contact,
      ordertype: ordertype,
      orderedItems: cardItems,
      restId: restId
    };
    return this.http.post(`${this.uri}/update`,customer).subscribe((res) => console.log('Done'));
    ;
  }
}
