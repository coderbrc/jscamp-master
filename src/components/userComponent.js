import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import CustomerRepository from "../repository/customerRepository.js"
import EmployeeRepository from "../repository/employeeRepository.js"
console.log("User component loaded...")
let logger1 = new MongoLogger()
let customerRepository = new CustomerRepository(logger1)
let employeeRepository=new EmployeeRepository(logger1)
let employeeService=new EmployeeService(employeeRepository,logger1)
let customerService = new CustomerService(customerRepository,logger1);
let user1 = new User(1, "Burçak", "Kasap", "Ankara","20","123456","customer")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla","20","123456","employee")
customerService.add(user1)
customerService.add(user2)
console.log(customerService.list())
console.log(customerService.getById(2))
customerService.list()
//prototyping
console.log("-----------------")
customerService.list()
let customerToAdd = new Customer(1, "Seda", "Yılmaz", "kameka")
customerToAdd.type = "customer"
customerService.add(customerToAdd)
console.log("--------------------")
console.log(customerService.list())
console.log(employeeService.list())
console.log(customerService.getErrors())
console.log(employeeService.getErrors())
console.log(customerService.getCustomersSorted())