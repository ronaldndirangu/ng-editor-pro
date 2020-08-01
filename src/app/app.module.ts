import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import angular fire libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';


const firebaseConfig = {
  apiKey: 'AIzaSyB80cRvRqNgKwXjMgyhtw0c3DGDr-3faX4',
  authDomain: 'ng-medium-editor.firebaseapp.com',
  databaseURL: 'https://ng-medium-editor.firebaseio.com',
  projectId: 'ng-medium-editor',
  storageBucket: 'ng-medium-editor.appspot.com',
  messagingSenderId: '429489017083',
  appId: '1:429489017083:web:2c9f02dc89d22f0bc1a05e',
  measurementId: 'G-ED1T5WR1RT'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    AuthModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
