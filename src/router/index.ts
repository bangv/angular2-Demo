import {Routes} from '@angular/router';
import {FormsComponent} from '../components/forms/forms.component';
import {FormsBuilderComponent} from '../components/forms-builder/forms-builder.component';
import {ObservablesComponent} from "../components/observables/observables.component";
/**
 * Created by xbw on 2018/8/16.
 */

// export const ...
const routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: FormsComponent}, {path: 'about', component: FormsBuilderComponent}, {
    path: 'observables',
    component: ObservablesComponent
  }];


export {routes};
