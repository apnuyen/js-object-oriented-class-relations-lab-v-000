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
		return store.passengers.filter(passenger => {
			return passenger.driverId === this.id
		})
	}
}

// below contains methoc that returns the user associated with the item

class Passenger {
	constructor(name){
		this.id = ++passengerId
		this.name = name

		store.passengers.push(this)
	}

	setUser(user){
		this.userId = user.id
	}
	user(){
		return store.users.find(function(user){
			return user.id === this.userId
		})
	}
}

class Trip {
  constructor(){

  }
}
