import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HousingLocationComponent],
  /* Template contains a form that allows a input section where the user can type in a city name to filter the array of data. 
  A button was also created with the class primary (so just a normal button), this button is used for the Search option
  THe housing location component was inserted here and in the tag a ngfor is used to loop through the data in the array located in the housing location component
  the variable housingLocation stores the name and the [] binds the data*/
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">     
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class ="results">
  <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
