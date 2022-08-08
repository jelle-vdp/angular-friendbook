import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  url = "http://localhost:6969/allfriends";

  constructor(private http: HttpClient) { }

  public addFriend(newFriend : Friend) {
    return this.http.post(this.url, newFriend)
  }
}
