import DataError from "../models/dataError.js"
import CustomerValidation from "../validation/customerValidation.js"
export default class CustomerService {
    constructor(customerRepository, loggerService) {
        this.customerRepository = customerRepository
        this.validator = new CustomerValidation()
        this.errors = []
        this.loggerService = loggerService
    }
    add(customer) {
        this.customerRepository.add(customer)
        this.loggerService.log(customer)
    }
    getErrors() {
        for (const customer of this.customerRepository.customers) {
            let validatorCustomer = this.validator.checkCustomerValidityForErrors(customer)
            if (!validatorCustomer) {
                this.errors.push(customer)
            }
        }
        return this.errors;
    }
    list() {
        const customers = this.customerRepository.list()
        return customers
    }
    getById(id) {
        const customer = this.customerRepository.getById(id)
        return customer
    }
    getCustomersSorted() {
        return this.customerRepository.getCustomersSorted()

    }
}