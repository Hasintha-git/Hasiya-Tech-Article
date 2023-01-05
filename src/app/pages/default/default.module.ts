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
import {SidebarModule} from 'primeng/sidebar';
import { BlogComponent } from './blog/blog.component';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    DefaultComponent,
    NavbarComponent,
    BlogComponent
  ],
  imports: [
    // CommonModule,
    DefaultRoutingModule,
    AccordionModule,
    ButtonModule,
    MenubarModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    MenuModule,
    SidebarModule,
    CarouselModule,
    CardModule,
    GalleriaModule

  ],
})
export class DefaultModule { }
