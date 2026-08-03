import {EmployeeService} from "./EmployeeService.js";
import {EmployeeNotFoundError} from "./errors.js";



const service = new EmployeeService();

const employee = await service.createEmployee({
  name: "Ahmed Ali",
  email: "ahmed@example.com",
  department: "Engineering",
  salary: 5000,
  isActive: true
});

// console.log(employee);


// Example result:

// {
//   id: "generated-id",
//   name: "Ahmed Ali",
//   email: "ahmed@example.com",
//   department: "Engineering",
//   salary: 5000,
//   isActive: true,
//   createdAt: new Date()
// }

// Update example:

const updatedEmployee =
  await service.updateEmployee(
    employee.id,
    {
      salary: 6000,
      isActive: false
    }
  );
//   console.log(updatedEmployee);


// Expected changed fields:

// {
//   salary: 6000,
//   isActive: false
// }

// Error-handling example:

try {
  await service.getEmployeeById("missing-id");
} catch (error: unknown) {
  if (error instanceof EmployeeNotFoundError) {
    console.error(error.message);
  } else if (error instanceof Error) {
    console.error("Unexpected error:", error.message);
  }
}
//get Employees example
console.log(await service.getEmployees());

const foundEmployee = await service.getEmployeeById(employee.id);
console.log(foundEmployee);

// Example of creating an employee with a duplicate email to trigger an error.
try {
    await service.createEmployee({
        name: "Ali",
        email: "ahmed@example.com",
        department: "HR",
        salary: 3000,
        isActive: true
    });
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}


// Example of creating an employee with invalid input to trigger an error.
try {
    await service.createEmployee({
        name: "",
        email: "test@test.com",
        department: "IT",
        salary: 5000,
        isActive: true
    });
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}



//for negitve salary
try {
    await service.createEmployee({
        name: "Test",
        email: "test2@test.com",
        department: "IT",
        salary: -100,
        isActive: true
    });
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}