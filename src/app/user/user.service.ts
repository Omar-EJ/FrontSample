import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:4000/user"

  constructor(private http: HttpClient,
              public  router: Router) { }

  //add user
  addUser(user:any): Observable<any>{
    let api = `${this.apiUrl}/add`;
    return this.http.post(api,user)
      .pipe(catchError(this.handleError));
  }



  //get users
  getAllUsers(): Observable<any>{
    let api = `${this.apiUrl}`;
    return this.http.get(api)
      .pipe(catchError(this.handleError));
  }
  //delete user by its id
  delete(id:string):Observable<any>{
    let api = `${this.apiUrl}/delete/${id}`;
    return this.http.post(api,"")
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);

  }
}
