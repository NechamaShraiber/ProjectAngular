import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model";
@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = "";
    users: User[] = [];
    u: User;
    constructor(private http: HttpClient) {

        this.u = new User();

        this.u.FirstName = "Dan";
        this.u.LastName = "Rom";
        this.u.password = "12345"
        this.u.UserName = "DanRom";
        this.u.profilePicture = "../../assets/Images/user1.jpg";
        this.users.push(this.u);
    }



    addUser(user) {
        user.profilePicture = "../../assets/Images/user1.jpg"
        this.users.push(user);

        // return this.http.post(this.url, user).subscribe(res => {
        console.log("user added to list");
        console.log(this.users);
    }
    // ), err => {
    //     console.log("user not added to list")
    // }
    //   }
    isExistingUser(loginer) {
        return this.users.find(r => r.UserName == loginer.UserName && r.password == loginer.Password)
    }
}



