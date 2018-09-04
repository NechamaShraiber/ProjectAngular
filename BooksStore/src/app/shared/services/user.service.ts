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
                console.log("go to home");
                this.router.navigate(["BooksStore/account/home"]);
            },
            err => {
                console.log(loginner);
                console.log("go to register");
                this.router.navigate(["BooksStore/account/register"]);
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



