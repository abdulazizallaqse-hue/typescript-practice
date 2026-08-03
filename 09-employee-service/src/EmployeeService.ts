import type {
    Employee,
    CreateEmployeeInput,
    UpdateEmployeeInput
} from './types.js';
import {
    EmployeeNotFoundError,
    DuplicateEmailError,
    InvalidEmployeeInputError
} from './errors.js'; 


export class EmployeeService {
    // Stores employees in memory
    private _employees: Employee[] = [];

    // Returns all employees after a simulated API delay.
    getEmployees(): Promise<Employee[]>{
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(this._employees);
            }, 1000);
        })

    }

    // Returns an employee by ID after a simulated API delay.
    getEmployeeById(
        id: string
    ): Promise<Employee>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Search for the employee by ID.
                const employee = this._employees.find(emp => emp.id === id);
                if (employee) {
                    resolve(employee);
                } else {
                    reject(new EmployeeNotFoundError(`Employee with ID ${id} not found.`));
                }
            }, 1000);
        });
    }

    createEmployee(
     input: CreateEmployeeInput
    ): Promise<Employee>{

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!input.name){
                    reject(new InvalidEmployeeInputError("Employee name is required."));
                    return;
                }
                if(input.salary < 0){
                    reject(new InvalidEmployeeInputError("Employee salary must be a positive number."));
                    return;
                }
                // Check for duplicate email.
                const existingEmployee = this._employees.find(emp => emp.email === input.email);
                if (existingEmployee) {
                    reject(new DuplicateEmailError(`Employee with email ${input.email} already exists.`));
                    return;
                }
                // Create the new employee.
                const newEmployee: Employee = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...input,
                    createdAt: new Date()
                };
                // Save the employee.
                this._employees.push(newEmployee);
                resolve(newEmployee);
            }, 1000);
        });
    }

    updateEmployee(
        id: string,
        input: UpdateEmployeeInput
    ): Promise<Employee>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Find employee index.
                const employeeIndex = this._employees.findIndex(emp => emp.id === id);
                if (employeeIndex === -1) {
                    reject(new EmployeeNotFoundError(`Employee with ID ${id} not found.`));
                    return;
                }
                if(input.email){
                    // Check if the new email already exists.
                    const existingEmployee = this._employees.find(emp => emp.email === input.email && emp.id !== id);
                    if (existingEmployee) {
                        reject(new DuplicateEmailError(`Employee with email ${input.email} already exists.`));
                        return;
                    }
                }
                if(input.name !== undefined){
                    if(!input.name){
                        reject(new InvalidEmployeeInputError("Employee name cannot be empty."));
                        return;
                    }
                }
                if(input.salary !== undefined){
                    if(input.salary < 0){
                        reject(new InvalidEmployeeInputError("Employee salary must be a positive number."));
                        return;
                    }
                
                }
                // Merge existing employee with updated values.
                this._employees[employeeIndex] = {
                    ...this._employees[employeeIndex]!,
                    ...input
                };
                resolve(this._employees[employeeIndex]);
            }, 1000);
        }); 
    }
}