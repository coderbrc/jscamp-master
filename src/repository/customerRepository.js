import { users } from "../data/users.js";
export default class CustomerRepository {
    constructor(loggerService) {
        this.customers = users.filter(c => c.type === "customer")
    }
    add(user) {
        this.customers.push(user)
    }
    list() {        
        return this.customers
    }
    getById(id) {
        return this.customers.find(u => u.id === id)
    }
    getCustomersSorted() {
        return this.customers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
    }
}