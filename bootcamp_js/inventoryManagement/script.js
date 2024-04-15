// Build an inventory management system for a store using JavaScript objects. Implement functions to add products, update product details, remove products, and display the current inventory.
// Create a Product class, an array named inventory that stores the product objects, and above mentioned functions.

const inventory = [];

function Product(id, name, price, quantity) {
  this.Id = id;
  this.Name = name;
  this.price = price;
  this.Quantity = quantity;
}

function addProduct(id, name, price, quantity) {
  let product = new Product(id, name, price, quantity);
  inventory.push(product);
}

addProduct(0, "iphone", 60000, 8);
addProduct(1, "bottel", 50, 4);
addProduct(2, "table", 700, 10);
addProduct(3, "laptop", 35000, 8);
addProduct(4, "tea", 100, 2);

// console.log(inventory)
// update array of quantity by id

function update(index) {
  inventory[index].Quantity = 4;
  inventory[index].price = 50000;
  // console.log(inventory);
}
update(3);

//delete id by indexing

function deleteObj(index) {
  inventory.splice(index, 1);
}
deleteObj(2);


//display function iterat by loop

function displayProduct(inventory) {
  for (let i of inventory) {
    console.log("id : " + i.Id);
    console.log("Name : " + i.Name);
    console.log("Price : " + i.price);
    console.log("Quantity :" + i.Quantity);
    console.log(" ");
  }
}
displayProduct(inventory);



// function displayProduct(inventory) {
//   for (let i of inventory){
//   let inventoryindex =i.Id;
//   let inventoryName=i.Name;
//   // console.log(inventoryName)
//   let inventoryPrize=i.Price;
//   let inventoryQuantity=i.Quantity;
//   }
//   return(
//     [{"ID":{inventoryindex},"Name":{inventoryName},"Price":{inventoryPrize},"Quantity":{inventoryQuantity}}]
//   )
// }
