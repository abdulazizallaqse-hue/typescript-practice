// Checks that the value is not empty.
function required() {
    return (value) => {
        if (value === undefined || value === null || value === "") {
            return "This field is required";
        }
        return undefined;
    };
}
// Runs all validators for each field.
// Collects validation errors and returns them.
function validateForm(values, rules) {
    // Collects all validation errors.
    const errors = {};
    //return string key
    // Check every field that has validation rules.
    for (const key in rules) {
        //change it to key of T
        const typedKey = key;
        // Get all validators for the current field.
        const validators = rules[typedKey] || [];
        // Stores errors 
        const fieldErrors = [];
        // Run every validator for the current field.
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
// Validates the email format using a regular expression.
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
// Creates a reusable custom validator.
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
export {};
// Expected errors:
// {
//   name: ["This field is required"],
//   age: ["Minimum allowed value is 18"],
//   salary: ["Minimum allowed value is 0"]
// }
//# sourceMappingURL=index.js.map