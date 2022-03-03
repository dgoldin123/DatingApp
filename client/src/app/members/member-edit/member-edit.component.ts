import { Component, OnInit } from '@angular/core';
import { take,map } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  user: User;
  
  constructor(private accountService: AccountService, private membersService: MembersService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }
  
  getUser(){
   this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
    });
  
  }

  loadMember(){
    this.membersService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    });
  }

}

/*
testU: string
  this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.testU = "constructor1 " + user.token + "\n\n\n" + user.username +"\n\n"
    });
  //const user: User = JSON.parse(localStorage.getItem('user'));
    //this.accountService.setCurrentUser(user);
    //this.testU = "constructor " + this.user.username 
  
 // this.testU = "constructor1 " + user.token + "\n\n\n" + user.username
     // this.testU = "constructor1 " + user.token + "\n\n\n" + user.username
    
   AuthGuard
   canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this.toastr.error('You shall not pass!');
      })
    );
  }
    */

