
export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
  isActive: boolean;
  createdAt: Date;
};

// Input used when creating a new employee.
export type CreateEmployeeInput = Omit<
  Employee,
  "id" | "createdAt"
>;

export type UpdateEmployeeInput = Partial<
  Omit<Employee, "id" | "createdAt">
>;

