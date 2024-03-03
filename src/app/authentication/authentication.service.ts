import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isAuthenticated = true; //TODO auf false setzen!!!
  private _userId = 'user1';


  get isAuthenticated(){
    return this._isAuthenticated;
  }

  get userId(){
    return this._userId;
  }

  constructor() { }

  login(){
    this._isAuthenticated = true;
  }

  logout(){
    this._isAuthenticated = false;
  }
}
