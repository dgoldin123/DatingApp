import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,BsDropdownModule.forRoot(), ToastrModule.forRoot({positionClass: 'toast-bottom-right'})
  ],
  exports: [BsDropdownModule, ToastrModule],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true }}]
})
export class SharedModule { }
