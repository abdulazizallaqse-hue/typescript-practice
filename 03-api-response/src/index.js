"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = {
    success: true,
    data: {
        id: "USER-1",
        name: "Ahmed"
    }
};
const failureResponse = {
    success: false,
    error: {
        code: 404,
        message: "User not found"
    }
};
function handleApiResponse(response) {
    if (response.success === true) {
        return response.data;
    }
    else
        console.log(`Error ${response.error.code}: ${response.error.message}`);
    return undefined;
}
console.log(handleApiResponse(successResponse));
console.log(handleApiResponse(failureResponse));
//# sourceMappingURL=index.js.map