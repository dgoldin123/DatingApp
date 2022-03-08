import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;
  @HostListener('window: beforeunload', ['$event']) unloadNotification($event: any){
    if (this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  showConsole: boolean = false;

  constructor(
    private accountService: AccountService, 
    private membersService: MembersService,
    private toastr: ToastrService 
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      if (this.showConsole){
        console.log("constructor user: "); 
        console.log(user);
      }
      this.user = user
    });
  }
  
  ngOnInit(): void {
    this.loadMember();
  }
  
  loadMember(){
    if (this.showConsole){
      console.log("loadMember this.user: "); 
      console.log(this.user);
    }
    this.membersService.getMember(this.user.userName).subscribe(member => {
      if (this.showConsole){
        console.log("this.membersService.getMember member: "); 
        console.log(member);
      }
      
      this.member = member;
      if (this.showConsole) {
        console.log("this.membersService.getMember this.member: "); 
        console.log(this.member);
      }
    });
  }

  updateMember(){
    this.membersService.updateMember(this.member).subscribe(() => {
      this.toastr.success("Profile Updated");
      this.editForm.reset(this.member);
    })
  }

}

      //console.log("user1 : " + user)
      //this.username = this.user.username
      //console.log("this.user.username: " + this.user.username)

    //console.log("this.user: " + this.user)
    //this.username = this.user.username
    //console.log("this.user.username: " + this.user.username)

/*
  getUser(){
   this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
    });
  }
  */

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

