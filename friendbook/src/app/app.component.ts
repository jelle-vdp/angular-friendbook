import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { DeleteFriendService } from './delete-friend.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Friendbook';
  favouriteLanguages = ["HTML", "CSS", "Javascript", "PHP"];
  newFriend = new Friend("", "", "", "", "", "");
  getFriendsUrl: string = "http://localhost:6969/allfriends";
  allFriends: Friend[] = [];
  displayView: string = "displayAllFriends";
  
  constructor(private addFriendService: AddFriendService, private deleteFriendService: DeleteFriendService ) {};

  ngOnInit(): any {
    this.displayAllFriendsView();
  }

  public displayAddFormView() {
    this.displayView = "displayAddForm";
  }

  public displayAllFriendsView() {
    this.displayAllFriends();
    this.displayView = "displayAllFriends";
  }

  public async displayAllFriends(): Promise<any> {
    this.allFriends = [];
    await fetch(this.getFriendsUrl)
      .then((response) => response.json())
      .then((friends) => {
        friends.forEach((friend: Friend) => {
          this.allFriends.push(new Friend(crypto.randomUUID(), friend.firstName, friend.lastName, friend.email, friend.phoneNumber, friend.favouriteLanguage));
        });
      });
  }

  public addNewFriend() {
    let newFriendObservable: Observable<any> = this.addFriendService.addFriend(this.newFriend);
    newFriendObservable.subscribe(data => "it worked", error => "it didn't work");
    this.displayAllFriendsView();
    this.newFriend = new Friend("", "", "", "", "", "");
  }

  
  public deleteFriend(firstName: string) {
    let deleteObservable: Observable<any> = this.deleteFriendService.deleteFriend(firstName);
    deleteObservable.subscribe(data => "it worked", error => "it didn't work");
    this.displayAllFriends();
  }
}
