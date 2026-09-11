function calculateTotal(price) {
  const productPrices = [200, 300, 150];
  let discountThreshold = 1000;

  if (price >= discountThreshold) {
    console.log("Discount Applied! Original Price:", price);
  } else {
    console.log("The Bill Amount:", productPrices[0]);
  }
}

calculateTotal(1000);
calculateTotal(5);