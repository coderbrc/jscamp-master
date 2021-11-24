import { users } from "../data/users.js";

export default class EmployeeRepository {
    constructor(loggerService) {
        this.employees =users.filter(e => e.type === "employee")
        this.loggerService = loggerService
    }
    add(user) {
        this.employees.push(user)
        this.loggerService.log(user)
    }
    list() {       
        return  this.employees
    }
    getById(id) {
        return this.employees.find(u => u.id === id)
    }
    getCustomersSorted() {
        return this.customers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
    }
}