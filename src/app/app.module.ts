import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdGridListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdAutocompleteModule} from '@angular/material';
import { MaterialModule } from "@angular/material";
import {MdInputModule} from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MdIconModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlsComponent,
    InputContainerComponent,
    MediaQueryComponent,
    GridListComponent,
    Ng2SmartTableComponent,
    MenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdGridListModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MaterialModule,
    ReactiveFormsModule,
    MdInputModule,
    FlexLayoutModule,
    Ng2SmartTableModule,
    MdIconModule,
    MdDialogModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
