// Example of a successful response.
const successResponse = {
    success: true,
    data: {
        id: "USER-1",
        name: "Ahmed"
    }
};
// Example of a failed response.
const failureResponse = {
    success: false,
    error: {
        code: 404,
        message: "User not found"
    }
};
// Handle the API response.
// Return the data if the request is successful.
// Print the error and return undefined if it fails.
function handleApiResponse(response) {
    if (response.success === true) {
        return response.data;
    }
    else
        console.log(`Error ${response.error.code}: ${response.error.message}`);
    return undefined;
}
// Test
console.log(handleApiResponse(successResponse));
console.log(handleApiResponse(failureResponse));
export {};
//# sourceMappingURL=index.js.map