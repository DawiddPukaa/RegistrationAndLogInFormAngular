import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent,  } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { SinginFormComponent } from './singin-form/singin-form.component';
import { TestPulseComponent } from './test-pulse/test-pulse.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SinginFormComponent,
    TestPulseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
