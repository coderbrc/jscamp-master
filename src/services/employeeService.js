import DataError from "../models/dataError.js"
import EmployeeValidation from "../validation/employeeValidation.js"
export default class EmployeeService {
    constructor(employeeRepository, loggerService) {
        this.employeeRepository = employeeRepository
        this.validator = new EmployeeValidation()
        this.errors = []
        this.loggerService = loggerService
    }
    add(employee) {
        let validatorEmployee = this.validator.checkEmployeeValidityForErrors(employee)
        if (!validatorEmployee) {
            this.errors.push(new DataError("Wrong user type", employee))
        }
        this.employeeRepository.add(customer)
        this.loggerService.log(employee)
    }
    list() {
        const employees = this.employeeRepository.list()
        return employees
    }
    getErrors() {
        for (const employee of this.employeeRepository.employees) {
            let validatorCustomer = this.validator.checkEmployeeValidityForErrors(employee)
            if (!validatorCustomer) {
                this.errors.push(employee)
            }
        }
        return this.errors;
    }
    getById(id) {
        const employee = this.employeeRepository.getById(id)
        return employee
    }
    getCustomersSorted() {
        return this.employeeRepository.getCustomersSorted()
    }
}