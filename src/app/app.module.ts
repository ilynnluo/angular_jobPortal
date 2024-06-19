import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatSelectModule} from '@angular/material/select';
// import {MatListModule} from '@angular/material/list';
// import {MatChipsModule} from '@angular/material/chips';
// import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { PositionFilterPipe } from './pipes/positionFilter.pipe';
import { AccountComponent } from './account/account.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    PositionFilterPipe,
      AccountComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
