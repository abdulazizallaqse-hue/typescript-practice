
type LoginForm = {
  email: string;
  password: string;
}
// Stores validation errors for each field.
// The property is optional because a field may have no errors.
type ValidationErrors<T> = {
  [K in keyof T]?: string[];
};
// Generic validator.
// Returns an error message if validation fails.
type Validator<T> = (value: T) => string | undefined

// Checks that the value is not empty.
function required<T>(): Validator<T> {
    return (value: T) => {
        if(value === undefined || value === null || value === ""){
            return "This field is required"
        }
        return undefined;
    }
}

// Runs all validators for each field.
// Collects validation errors and returns them.
function validateForm<T>(
  values: T,
  rules: {
    [K in keyof T]?: Validator<T[K]>[];
  }
): ValidationErrors<T> {
    // Collects all validation errors.
  const errors: ValidationErrors<T> = {};
  //return string key
  // Check every field that has validation rules.
  for (const key in rules) {
    //change it to key of T
    const typedKey = key as keyof T;
    // Get all validators for the current field.
    const validators = rules[typedKey] || [];
    // Stores errors 
    const fieldErrors: string[] = [];
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

function minLength(min: number): Validator<string> {
    return (value: string) => {
        if(value.length < min){
            return `Minimum length is ${min}`
        }
        return undefined;
    }
}
function maxLength(max: number): Validator<string> {
    return (value: string) => {
        if(value.length > max){
            return `Maximum length is ${max}`
        }
        return undefined;
    }
}

// Validates the email format using a regular expression.
function email(): Validator<string> {
    return (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(value)){
            return "Invalid email address"
        }
        return undefined;
    }
}

function min(min: number): Validator<number> {
    return (value: number) => {
        if(value < min){
            return `Minimum value is ${min}`
        }
        return undefined;
    }
}

function max(max: number): Validator<number> {
    return (value: number) => {
        if(value > max){
            return `Maximum value is ${max}`
        }
        return undefined;
    }  
}

// Creates a reusable custom validator.
function custom<T>(validator: (value: T) => boolean, errorMessage: string): Validator<T> {
    return (value: T) => {
        if(!validator(value)){
            return errorMessage
        }
        return undefined;
    }
}





//Example usage:
const loginData: LoginForm = {
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

// Expected output:

// {
//   email: ["Invalid email address"],
//   password: [
//     "Must contain at least 8 characters"
//   ]
// }


type EmployeeForm = {
  name: string;
  email: string;
  age: number;
  salary: number;
};

// Example invalid data:

const employeeData: EmployeeForm = {
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
