
// Success response from the API.
// T is the type of the returned data.
type ApiSuccess<T> = {
  success: true;
  data: T;
};

// Failed response from the API.
type ApiFailure = {
  success: false;
  error: {
    code: number;
    message: string;
  };
};

// The API response can be success or failure.
type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

// Example user data.
type User = {
  id: string;
  name: string;
};

// Example of a successful response.
const successResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: "USER-1",
    name: "Ahmed"
  }
};

// Example of a failed response.
const failureResponse: ApiResponse<User> = {
  success: false,
  error: {
    code: 404,
    message: "User not found"
  }
};


// Handle the API response.
// Return the data if the request is successful.
// Print the error and return undefined if it fails.
function handleApiResponse<T>(response:ApiResponse<T>):T| undefined{
    if(response.success === true){
        return response.data;
    }
    else  
    console.log(`Error ${response.error.code}: ${response.error.message}`);
    return undefined;
}


// Test
console.log(handleApiResponse(successResponse));
console.log(handleApiResponse(failureResponse));
