import { EmployeeNotFoundError, DuplicateEmailError, InvalidEmployeeInputError } from './errors.js';
export class EmployeeService {
    _employees = [];
    // Returns all employees after a simulated API delay.
    getEmployees() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._employees);
            }, 1000);
        });
    }
    // Returns an employee by ID after a simulated API delay.
    getEmployeeById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Search for the employee by ID.
                const employee = this._employees.find(emp => emp.id === id);
                if (employee) {
                    resolve(employee);
                }
                else {
                    reject(new EmployeeNotFoundError(`Employee with ID ${id} not found.`));
                }
            }, 1000);
        });
    }
    createEmployee(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!input.name) {
                    reject(new InvalidEmployeeInputError("Employee name is required."));
                    return;
                }
                if (input.salary < 0) {
                    reject(new InvalidEmployeeInputError("Employee salary must be a positive number."));
                    return;
                }
                const existingEmployee = this._employees.find(emp => emp.email === input.email);
                if (existingEmployee) {
                    reject(new DuplicateEmailError(`Employee with email ${input.email} already exists.`));
                    return;
                }
                // Create the new employee.
                const newEmployee = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...input,
                    createdAt: new Date()
                };
                this._employees.push(newEmployee);
                resolve(newEmployee);
            }, 1000);
        });
    }
    updateEmployee(id, input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const employeeIndex = this._employees.findIndex(emp => emp.id === id);
                if (employeeIndex === -1) {
                    reject(new EmployeeNotFoundError(`Employee with ID ${id} not found.`));
                    return;
                }
                if (input.email) {
                    const existingEmployee = this._employees.find(emp => emp.email === input.email && emp.id !== id);
                    if (existingEmployee) {
                        reject(new DuplicateEmailError(`Employee with email ${input.email} already exists.`));
                        return;
                    }
                }
                if (input.name !== undefined) {
                    if (!input.name) {
                        reject(new InvalidEmployeeInputError("Employee name cannot be empty."));
                        return;
                    }
                }
                if (input.salary !== undefined) {
                    if (input.salary < 0) {
                        reject(new InvalidEmployeeInputError("Employee salary must be a positive number."));
                        return;
                    }
                }
                // Update the employee.
                this._employees[employeeIndex] = {
                    ...this._employees[employeeIndex],
                    ...input
                };
                resolve(this._employees[employeeIndex]);
            }, 1000);
        });
    }
}
//# sourceMappingURL=EmployeeService.js.map