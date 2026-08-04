// Calculate the final price of a product.
function calculateFinalPrice(product) {
    //Using isPhysicalProduct() function for chicking the type
    if (isPhysicalProduct(product)) {
        return product.price + product.shippingCost;
    }
    //Using isDigitalProduct() function for chicking the type
    else if (isDigitalProduct(product) && product.price > 100) {
        return product.price * 0.90;
    }
    //for digital without discaunt    
    return product.price;
}
//Type Guard function
function isPhysicalProduct(product) {
    return product.type === "physical";
}
//Type Guard function
function isDigitalProduct(product) {
    return product.type === "digital";
}
//example
const laptop = {
    id: "P-1",
    name: "Laptop",
    price: 1200,
    type: "physical",
    weight: 2.5,
    stockQuantity: 10,
    shippingCost: 25
};
const course = {
    id: "P-2",
    name: "TypeScript Course",
    price: 150,
    type: "digital",
    downloadUrl: "https://example.com/course",
    fileSizeMB: 900,
    licenseKey: "TS-ABC-123"
};
// Test
console.log(calculateFinalPrice(laptop));
console.log(calculateFinalPrice(course));
export {};
//# sourceMappingURL=index.js.map