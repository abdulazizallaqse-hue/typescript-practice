export type Employee = {
    id: string;
    name: string;
    email: string;
    department: string;
    salary: number;
    isActive: boolean;
    createdAt: Date;
};
export type CreateEmployeeInput = Omit<Employee, "id" | "createdAt">;
export type UpdateEmployeeInput = Partial<Omit<Employee, "id" | "createdAt">>;
//# sourceMappingURL=types.d.ts.map