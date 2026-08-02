// Generic function.
// Works with any object type.
function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K]{
    return object[key] 
}

// Returns a new object.
// Does not modify the original object.
function updateProperty<T, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
): T{
    // Spread operator (...)
    // Creates a copy of the original object.
    // [key]: value
    // Updates the property using a dynamic key. 
    const newObject = {...object, [key]: value}
    return newObject

}

// Returns only the selected properties.
function pickProperties<T,K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K>{

    // Makes all properties optional while building the object.
    const result: Partial<T> = {};

    for (const key of keys) {
    result[key] = object[key];
    }

    return result as Pick<T, K>;


}


// Example

const user = {
  id: "USER-1",
  name: "Ahmed",
  age: 30,
  isActive: true
};

const name = getProperty(user, "name");
const age = getProperty(user, "age");

const updatedUser = updateProperty(
  user,
  "age",
  31
);

const basicInfo = pickProperties(
  user,
  ["id", "name"]
);

// Expected inferred types:

// name: string
// age: number

// basicInfo:
// {
//   id: string;
//   name: string;
// }

// This should fail during TypeScript compilation:

// console.log(getProperty(user, "email")); // Compile-time error

// This should also fail:

// console.log(updateProperty(user, "age", "thirty")); // Compile-time error
