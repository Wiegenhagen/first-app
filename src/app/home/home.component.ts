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
  the variable housingLocation stores the name and the [] binds the data. Added filter variable to line 20. Added a click listener to line 22 and calling the filterResults function
  the agrument .value gets the input from the HTML element. value is a function of the filter template var property*/
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>      
      <button class="primary" type="button"
        (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class ="results">
  <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = []; ///inserting the new array for the filter function on the page. filterLocationList will hold values that match the search criteria entered by user
  housingService: HousingService = inject(HousingService);
    housingLocationList: Housinglocation[];

  /*constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }*/ ///old constructor

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations(); // add the total set of housinf locations values to the filteredLocationList when the page loads
    this.filteredLocationList = this.housingLocationList;
  }
  ///Filter function used to filter the listings based on user input . uses string to compare input against the housingLocation.city property
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
