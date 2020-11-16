import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, DashboardLayoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

    DashboardLayoutComponent
  ]
  
})
export class LayoutModule { }
