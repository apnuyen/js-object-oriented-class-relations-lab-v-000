let store = {drivers: [], passengers: [], trips: []}
let driverId = 0

class Driver {
	constructor(name){
		this.id = ++driverId
		this.name = name

		// insert in the user to the store

	trips(){
		return trips.filter(trip => {
			return trip.userId === this.id
		})
	}
}

// below contains methoc that returns the user associated with the item

class Passenger {
	constructor(name, price, user){
		this.id = ++itemId
		this.name = name
		this.price = price
		if(user){
			this.userId = user.id
		}

		store.items.push(this)
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
