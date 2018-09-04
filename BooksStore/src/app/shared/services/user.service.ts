import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model";
import { Observable } from 'rxjs';

import { Subject } from "../../../../node_modules/rxjs";
@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = " http://localhost:3500/api";
    usersList: User[] = [];
    u: User;
    subAnonymous = new Subject();
    constructor(private http: HttpClient) {

        this.u = new User();

        this.u.FirstName = "Dan";
        this.u.LastName = "Rom";
        this.u.password = "12345"
        this.u.UserName = "DanRom";
        this.u.profilePicture = "../../assets/Images/user1.jpg";
        this.usersList.push(this.u);
    }

    addUser(user: User) {
        user.profilePicture = "../../assets/Images/user1.jpg";
        return this.http.post(this.url.concat('/register'), user).subscribe(res => {
            localStorage.setItem('user', JSON.stringify(user));
            this.subAnonymous.next(true);
            alert("user added to list");
        }
        ), err => {
            alert("user not added to list");
        }
    }

    isExistingUser(loginner: User) {
        //this.users = this.http.get(`http://localhost:3500/`).subscribe(res => { console.log(JSON.parse(JSON.stringify(res))); return res; });
        // this.httpUsers.subscribe()

        //**********
        //this.http.post<any>(`http://localhost:3500/api/users`).subscribe(result => this.usersList = JSON.parse(JSON.stringify(result)));
        //**********
        return this.http.post("http://localhost:3500/api/login", loginner).subscribe(
            res => () => { JSON.parse(JSON.stringify(res)); },
            err => () => { JSON.parse(JSON.stringify(err)); }
        )
        // console.log(this.http.get(`http://localhost:3500/api/users`))
        // console.log("this.users" + this.usersList);
        // debugger
        // return this.usersList.find(r => r.UserName == loginner.UserName && r.password == loginner.password)
    }
}



