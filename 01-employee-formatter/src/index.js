"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatEmployee(employee) {
    const status = employee.isActive ? "Active" : "Inactive";
    const phone = employee.phoneNumber ?? "No phone number";
    return `${employee.name} - ${employee.department} - ${employee.email} - ${status} - ${phone}`;
}
function getActiveEmployees(employees) {
    return employees.filter(employee => employee.isActive);
}
const employees = [
    {
        id: "EMP-1",
        name: "Ahmed Ali",
        email: "ahmed@example.com",
        age: 28,
        department: "Engineering",
        isActive: true,
        // phoneNumber: "+966500000001"
    },
    {
        id: "EMP-2",
        name: "Sara Mohamed",
        email: "sara@example.com",
        age: 30,
        department: "HR",
        isActive: false
    }
];
console.log(formatEmployee(employees[0]));
console.log(getActiveEmployees(employees));
//# sourceMappingURL=index.js.map