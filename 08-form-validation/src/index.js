"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function required() {
    return (value) => {
        if (value === undefined || value === null || value === "") {
            return "This field is required";
        }
        return undefined;
    };
}
function validateForm(values, rules) {
    const errors = {};
    for (const key in rules) {
        const typedKey = key;
        const validators = rules[typedKey] || [];
        const fieldErrors = [];
        for (const validator of validators) {
            const error = validator(values[typedKey]);
            if (error) {
                fieldErrors.push(error);
            }
        }
        if (fieldErrors.length > 0) {
            errors[typedKey] = fieldErrors;
        }
    }
    return errors;
}
function minLength(min) {
    return (value) => {
        if (value.length < min) {
            return `Minimum length is ${min}`;
        }
        return undefined;
    };
}
function maxLength(max) {
    return (value) => {
        if (value.length > max) {
            return `Maximum length is ${max}`;
        }
        return undefined;
    };
}
function email() {
    return (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Invalid email address";
        }
        return undefined;
    };
}
function min(min) {
    return (value) => {
        if (value < min) {
            return `Minimum value is ${min}`;
        }
        return undefined;
    };
}
function max(max) {
    return (value) => {
        if (value > max) {
            return `Maximum value is ${max}`;
        }
        return undefined;
    };
}
function custom(validator, errorMessage) {
    return (value) => {
        if (!validator(value)) {
            return errorMessage;
        }
        return undefined;
    };
}
//Example usage:
const loginData = {
    email: "invalid-email",
    password: "123"
};
const loginErrors = validateForm(loginData, {
    email: [
        required(),
        email()
    ],
    password: [
        required(),
        minLength(8)
    ]
});
console.log(loginErrors);
// Example invalid data:
const employeeData = {
    name: "",
    email: "employee@example.com",
    age: 15,
    salary: -100
};
const employeeErrors = validateForm(employeeData, {
    name: [required()],
    email: [required(), email()],
    age: [required(), min(18)],
    salary: [required(), min(0)]
});
console.log(employeeData);
console.log(employeeErrors);
// Expected errors:
// {
//   name: ["This field is required"],
//   age: ["Minimum allowed value is 18"],
//   salary: ["Minimum allowed value is 0"]
// }
//# sourceMappingURL=index.js.map