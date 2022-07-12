import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class BlogPostService {
    api_base_url = undefined;
  constructor(public http: HttpClient, private _userService: UserService) {
    this.api_base_url = 'http://127.0.0.1:8000';
  }

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get(this.api_base_url+'/api/posts/');
  }

  // send a POST request to the API to create a new data object
  create(post) {
    return this.http.post(this.api_base_url+'/api/posts/', JSON.stringify(post), this.getHttpOptions());
  }

  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

}
