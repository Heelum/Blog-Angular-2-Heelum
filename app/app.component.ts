import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { HomeComponent }  from './home-component';
import { DetailComponent }  from './detail-component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './views/main.html',
})

@RouteConfig([
  {path: '/', name: 'Grid', component: HomeComponent},
  {path: '/post/:id',name: 'Posts', component: DetailComponent}
])

export class AppComponent { }
