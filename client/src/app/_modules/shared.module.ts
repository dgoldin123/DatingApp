import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,BsDropdownModule.forRoot(), ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    TabsModule.forRoot(), NgxGalleryModule, BsDatepickerModule.forRoot()
  ],
  exports: [BsDropdownModule, ToastrModule, TabsModule, NgxGalleryModule, BsDatepickerModule],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true }}]
})
export class SharedModule { }
