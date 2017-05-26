import { Car } from './Car'
export default class VehicleService {
  constructor() {
    this.alive = true;
  }
  getCars() {
    const cars = []
    const car = new Car()
    car.model = 'Quick Transport'
    car.make = 'Tesla'
    car.miles = 15600
    car.license = 'AT9900'
    car.latLong = '40.773272 -73.968875'
    cars.push(car)
    return cars
  }
}
