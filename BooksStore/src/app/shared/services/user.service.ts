import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
      providedIn: 'root'
     })
export class UserService {

   constructor(private http: HttpClient) { }
url: string = "";
// Users:

// addPerson(user) {

//     // return this.http.post(this.url, user).subscribe(res => {
//     //   console.log("user added to list")
//     }
//     ), err => {
//         console.log("user not added to list")
//     }
//   }

}



