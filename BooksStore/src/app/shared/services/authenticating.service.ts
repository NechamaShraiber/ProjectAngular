import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor() { }

    isAnonymousSubject = new Subject();
    isAnonymous: boolean;
    // f() {
    //     this.isAnonymousSubject.subscribe({
    //         next: (b: boolean) => { this.isAnonymous = b;console.log(this.isAnonymous) }
    //     })
    // }

    // login(username: string, password: string) {
    //     //check if login successful 
    //     let isOk = (username == "test" && password == "test");
    //     if (isOk)
    //         // store user details in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify({ username, password }));
    //     return of(isOk);
    // }

    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    // }
}