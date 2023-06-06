import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations'; // Removed the array of information and added the var called url and added the json link 

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url) // call web server to get data. code now uses asynchronous code to make a get request over HTTP
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined>
  {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  };
}
