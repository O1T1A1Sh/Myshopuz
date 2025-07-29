const cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  displayCart();
}

function displayCart() {
  const cart = document.getElementById("cartItems");
  cart.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cart.appendChild(li);
  });
}

function sendToTelegram() {
  const message = `Yangi buyurtma: ${cartItems.join(", ")}`;
  const token = "TELEGRAM_BOT_TOKEN";
  const chatId = "CHAT_ID";
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  fetch(url);
  alert("Telegramga yuborildi!");
}
