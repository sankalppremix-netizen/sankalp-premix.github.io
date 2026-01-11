const productPrices = {
  "Cardamom Tea": 450,
  "Masala Tea": 450,
  "Ginger Tea": 450,
  "Lemon Tea": 450,
  "Lemongrass Tea": 450,
  "Jaggery Tea": 450,
  "Kulhad Tea": 480,
  "Chocolate Tea": 500,
  "Chocolate Coffee": 500,
  "Cappuccino": 500,
  "Basundi Sugar Tea": 450,
  "Basundi Jaggery Tea": 450,
  "Sugar Coffee": 450,
  "Strawberry Tea": 450,
  "Sugar Tea": 450,
  "Black Tea": 500,
  "Black Coffee": 500,
  "Green Tea": 550,
  "Vanilla Coffee": 450,
  "Diet Coffee": 480,
  "Vanilla Tea": 450,
  "Diet Tea": 480,
  "Honey Tea": 450,
  "Honey Lemon Tea": 500
};



function updatePrice() {
    const product = document.getElementById("product").value;
    const packageSize = document.getElementById("package").value;
    const quantity = document.getElementById("quantity").value;

    if (product === "" || packageSize === "") {
        document.getElementById("total").innerText = 0;
        return;
    }

    let pricePerKg = productPrices[product];
    let totalPrice = pricePerKg * packageSize * quantity;

    // Update summary
    document.getElementById("summaryProduct").innerText = product;
    document.getElementById("summaryPackage").innerText =
        packageSize == 1 ? "1 Kg" :
        packageSize == 0.5 ? "500 g" : "250 g";
    document.getElementById("summaryQty").innerText = quantity;
    document.getElementById("total").innerText = totalPrice.toFixed(2);
}

function showPopup() {
    document.getElementById("orderPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

function sendOrderEmail() {

  const params = {
    customer_name: document.getElementById("name").value,
    customer_email: document.getElementById("email").value,
    customer_phone: document.getElementById("phone").value,
    customer_address: document.getElementById("Address").value,

    product: document.getElementById("summaryProduct").innerText,
    package: document.getElementById("summaryPackage").innerText,
    quantity: document.getElementById("summaryQty").innerText,
    total_price: document.getElementById("total").innerText
  };

  // basic validation
  if (!params.customer_name || !params.customer_email || !params.customer_phone) {
    alert("Please fill all required customer details");
    return;
  }

  emailjs.send(
    "service_k3nbu4f",     // e.g. service_xxxxxx
    "template_5c43cfa",    // e.g. template_xxxxxx
    params
  )
  .then(function(response) {
    alert("✅ Order placed successfully! We will contact you soon.");
  }, function(error) {
    alert("❌ Failed to send order. Please try again.");
    console.log(error);
  });
  

}


