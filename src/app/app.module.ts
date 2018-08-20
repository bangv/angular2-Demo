import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsBuilderComponent} from '../components/forms-builder/forms-builder.component';
import {FormsComponent} from '../components/forms/forms.component';
import {MyDirectiveDirective} from '../directive/my-directive.directive';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {routes} from '../router/index';
import { ObservablesComponent } from '../components/observables/observables.component';
import { RouterParamsComponent } from '../components/router-params/router-params.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormsBuilderComponent,
    MyDirectiveDirective,
    ObservablesComponent,
    RouterParamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
