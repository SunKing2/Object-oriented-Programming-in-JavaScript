import VehicleService from './VehicleService'
import assert from 'assert'

function itCheckProperty(obj, prop, value) {
  it ('should have ' + prop + ' with value of ' + value , () => {
    assert(obj[prop] === value)
  })
}

describe('VehicleService', () => {
  const vehicleService = new VehicleService()
  describe(".alive", () => {
    it('should be true', () => {
      assert(vehicleService.alive === true)
    })
  })
  describe('getCars()', () => {
    const cars = vehicleService.getCars()
    it('should contain at least one Car', () => {
      assert(cars.length > 0)
    });
    describe('[0]', () => {
      const carFirst = cars[0]
      it ('should be defined', () => {
        assert(carFirst)
      })
      describe('model', () => {
        console.log("carFirst=" + carFirst.model)
        const model = carFirst.model
        it ('should have nonzero length', () => {
          assert(model.length > 0)
        })
      })
      itCheckProperty(carFirst, 'model', 'Quick Transport')
      itCheckProperty(carFirst, 'make', 'Tesla')
      itCheckProperty(carFirst, 'miles', 15600)
      itCheckProperty(carFirst, 'license', 'AT9900')
      itCheckProperty(carFirst, 'latLong', '40.773272 -73.968875')
    })
  })
})
