import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from "../../../../node_modules/rxjs";

import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = " http://localhost:3500/api";
    usersList: User[] = [];
    u: User;
    subAnonymous = new Subject();
    constructor(private http: HttpClient, private router: Router) {

        // this.u = new User();

        // this.u.FirstName = "Dan";
        // this.u.LastName = "Rom";
        // this.u.password = "12345"
        // this.u.UserName = "DanRom";
        // this.u.profilePicture = "../../assets/Images/user1.jpg";
        // this.usersList.push(this.u);
    }

    register(user: User) {
        user.profilePicture = "../../assets/Images/user1.jpg";
        return this.http.post(this.url.concat('/register'), user).subscribe(res => {
            this.addUserToLocalStorage(user);
            this.subAnonymous.next(true);
            alert("user added to list");
        }
        ), err => {
            alert("user not added to list");
        }
    }

    login(loginner: User) {
        console.log("service login");
        this.http.post("http://localhost:3500/api/login", loginner).subscribe(
            res => {
                loginner = JSON.parse(JSON.stringify(res));
                console.log(loginner);
                this.addUserToLocalStorage(loginner);
                this.subAnonymous.next(true);
                this.router.navigate(["/home"]);
            },
            err => {
                console.log(loginner);
                JSON.parse(JSON.stringify(err));
                this.router.navigate(["/account/register"]);
            }
        )
    }
    addUserToLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    deleteUserFromLocalStorage() {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        this.subAnonymous.next(false);

    }
}



