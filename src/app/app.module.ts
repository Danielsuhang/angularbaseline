import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule,FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule,   } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AngularFirestoreModule, AngularFireDatabaseModule,
    AngularFireModule

  ],
  providers: [{ provide: FirebaseOptionsToken, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
