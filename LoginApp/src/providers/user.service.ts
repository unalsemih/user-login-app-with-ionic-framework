import { Injectable, Inject} from '@angular/core';
import { User} from '../entities/user';
import {Http, Response} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http, @Inject('apiUrl') private apiUrl){}
    
    getUsers(seoUrl?: string):Observable<User[]>{
        if(seoUrl){
            console.log('girdi.');
            return this.http.get(this.apiUrl + "/users/" + seoUrl)
            .map(response=>response.json());
         
                }
        else{
                return this.http.get(this.apiUrl + "/users")
                .map(response => response.json());
        }
    }
}