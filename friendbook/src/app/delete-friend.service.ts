import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DeleteFriendService {
  url = "http://localhost:6969/deletefriend/";

  constructor(private http: HttpClient) { }

  public deleteFriend(firstName: string) {

    const deleteHeaders = new HttpHeaders();

    return this.http.delete(this.url + firstName)
  }
}
