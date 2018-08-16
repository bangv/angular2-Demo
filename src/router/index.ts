import {Routes} from '@angular/router';
import {FormsComponent} from '../components/forms/forms.component';
import {FormsBuilderComponent} from '../components/forms-builder/forms-builder.component';
/**
 * Created by xbw on 2018/8/16.
 */

// export const ...
const routes = [{path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'home', component: FormsComponent}, {path: 'about', component: FormsBuilderComponent}];


export {routes};
