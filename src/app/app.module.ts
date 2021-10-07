import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CatCardComponent } from './cat-card/cat-card.component';
import {MatCardModule} from '@angular/material/card';
import { CatListComponent } from './cat-list/cat-list.component';
import {MatButtonModule} from '@angular/material/button';
import { CatFormComponent } from './cat-form/cat-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CatService } from './service/cat-service';
import { HttpClientModule } from '@angular/common/http';
import { CatProfileComponent } from './cat-profile/cat-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    CatListComponent,
    CatFormComponent,
    CatProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
