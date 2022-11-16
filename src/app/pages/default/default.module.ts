import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

import {AccordionModule} from 'primeng/accordion'; 
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './template/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { ChipModule } from 'primeng/chip';
import {DialogModule} from 'primeng/dialog';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenuModule} from 'primeng/menu';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    DefaultComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    MenuModule,
  ]
})
export class DefaultModule { }
