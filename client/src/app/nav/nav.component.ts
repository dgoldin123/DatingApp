import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentEnv = environment.currentEnv
  //public to use in html 
  constructor(
    public accountService: AccountService, 
    private router: Router, 
    private toastr: ToastrService
  ) { } 

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    });
  }
  
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
