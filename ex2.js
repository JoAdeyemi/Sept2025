function checkBaggage() {
  // Get the weight entered by the user
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("size");

  // Validate input
  if (isNaN(weight)) {
    result.textContent = "⚠️ Please enter a valid number.";
    return;
  }

  // Check weight condition
  if (weight > 50) {
    result.textContent = "❌ Baggage is overweight!";
  } else {
    result.textContent = "✅ Baggage weight is allowed.";
  }
}