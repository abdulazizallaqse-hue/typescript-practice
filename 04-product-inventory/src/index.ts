// Base interface for all products.
interface BaseProduct {
  id: string
  name: string
  price: number
}

// Physical product with shipping information.
interface PhysicalProduct extends BaseProduct{
  type: "physical"
  weight: number
  stockQuantity: number
  shippingCost: number
}

// Digital product with download information.
interface DigitalProduct extends BaseProduct{
  type: "digital"
  downloadUrl: string
  fileSizeMB: number
  licenseKey: string
}

// A product can be physical or digital.
type Product = PhysicalProduct | DigitalProduct

// Calculate the final price of a product.
function calculateFinalPrice(product:Product): number {

    //Using isPhysicalProduct() function for chicking the type
    if (isPhysicalProduct(product)){
        return product.price + product.shippingCost
    } 
    //Using isDigitalProduct() function for chicking the type
    else if (isDigitalProduct(product) && product.price>100){
        return product.price*0.90
    }
    //for digital without discaunt    
        return product.price
}
//Type Guard function
function isPhysicalProduct(product: Product): product is PhysicalProduct{
        return product.type === "physical"
}
//Type Guard function
function isDigitalProduct(product: Product): product is DigitalProduct{
        return product.type ==="digital"
}

//example
const laptop: PhysicalProduct = {
  id: "P-1",
  name: "Laptop",
  price: 1200,
  type: "physical",
  weight: 2.5,
  stockQuantity: 10,
  shippingCost: 25
}

const course: DigitalProduct = {
  id: "P-2",
  name: "TypeScript Course",
  price: 150,
  type: "digital",
  downloadUrl: "https://example.com/course",
  fileSizeMB: 900,
  licenseKey: "TS-ABC-123"
}

// Test
console.log(calculateFinalPrice(laptop))
console.log(calculateFinalPrice(course))

