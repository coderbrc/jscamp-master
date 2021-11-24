import DataError from "../models/dataError.js"
export default class EmployeeValidation {
    constructor() {
        this.error = []
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        hasErrors = (requiredFields.length) ? requiredFields.every(n => n == 0):true
        if (hasErrors)
            this.error.push(new DataError(`Validation problem. ${field} is required.`, user))
        if (Number.isNaN(Number.parseInt(user.age))) {
            this.error.push(new DataError(`Validation problem. ${user.age} is not a number.`
                , user))
        }
        return hasErrors
    }
}