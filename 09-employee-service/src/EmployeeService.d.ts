import type { Employee, CreateEmployeeInput, UpdateEmployeeInput } from './types.js';
export declare class EmployeeService {
    private _employees;
    getEmployees(): Promise<Employee[]>;
    getEmployeeById(id: string): Promise<Employee>;
    createEmployee(input: CreateEmployeeInput): Promise<Employee>;
    updateEmployee(id: string, input: UpdateEmployeeInput): Promise<Employee>;
}
//# sourceMappingURL=EmployeeService.d.ts.map