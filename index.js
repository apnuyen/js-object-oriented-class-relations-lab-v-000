let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
	constructor(name){
		this.id = ++driverId
		this.name = name

		// insert in the user to the store
    store.drivers.push(this)
  }

	trips(){
		return store.trips.filter(trip => {
			return trip.driverId === this.id
		})
	}

  passengers(){
		return this.trips().map(trip => {
      return trip.passenger();
    });
	}
}

// below contains methoc that returns the user associated with the item

class Passenger {
	constructor(name){
		this.id = ++passengerId
		this.name = name
		store.passengers.push(this)
	}

	trips(){
		return store.trips.filter(trip => {
			return trip.passengerId === this.id
		})
	}

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
