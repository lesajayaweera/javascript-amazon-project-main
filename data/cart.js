export const cart = [
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 3,
  },
  {
      productId: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,

    },{
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    }
];



// fuction to add items to the cart object
export function addToCart(productId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId: productId, quantity: 1 });
    console.log(cart)
  }
}