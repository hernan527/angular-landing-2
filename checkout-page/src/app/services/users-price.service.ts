import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersPriceService {

  constructor() { }

  getUserAndPrice(value: string) {
    switch (value) {
      case '200':
      return {
        numberOfUsers: 6,
        pricePerYear: 200
      };
      case '400':
      return {
        numberOfUsers: 7,
        pricePerYear: 250
      };

      case '600':
      return {
        numberOfUsers: 8,
        pricePerYear: 280
      };

      case '800':
      return {
        numberOfUsers: 10,
        pricePerYear: 320
      };
      default:
      return {
        numberOfUsers: 7,
        pricePerYear: 250
      };
    }
  }

}
