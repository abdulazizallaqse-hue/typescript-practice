
type LoginForm = {
  email: string;
  password: string;
}

type ValidationErrors<T> = {
  [K in keyof T]?: string[];
};

type Validator<T> = (value: T) => string | undefined


function required<T>(): Validator<T> {
    return (value: T) => {
        if(value === undefined || value === null || value === ""){
            return "This field is required"
        }
        return undefined;
    }
}

function validateForm<T>(
  values: T,
  rules: {
    [K in keyof T]?: Validator<T[K]>[];
  }
): ValidationErrors<T> {
  const errors: ValidationErrors<T> = {};
  for (const key in rules) {
    const typedKey = key as keyof T;
    const validators = rules[typedKey] || [];
    const fieldErrors: string[] = [];
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
