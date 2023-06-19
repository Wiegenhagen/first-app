import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
//Routing to enable button clicks thus navigating to the desire pages 

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent, // component the route is linked to 
    title: 'Home page'  // title of the button 
  },
  {
    path: 'details/:id', // The id indicated that the path will direct to the selected house from the array
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
