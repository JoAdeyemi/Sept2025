function checkBaggage() {
  let allowable = 50;
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("Allowed Weight");

  if (isNaN(weight) || weight <= 0) {
    result.textContent = "⚠️ Please enter a valid baggage weight.";
    return;
  }

  // If weight is within the limit
  if (weight <= allowable) {
    result.textContent = `✅ Baggage weight is ${weight}kg. Allowed.`;
    return;
  }

  // If overweight, calculate and prompt for reductions
  let excess = weight - allowable;
  alert(`❌ Your baggage is overweight by ${excess}kg.`);

  // Keep prompting until weight <= allowable
  while (weight > allowable) {
    let reduce = parseFloat(prompt(`Enter how many kg you will remove (current: ${weight}kg)`));

    // Validate input
    if (isNaN(reduce) || reduce <= 0) {
      alert("Please enter a valid number greater than 0.");
      continue;
    }

    // Update the weight
    weight -= reduce;

    if (weight > allowable) {
      alert(`Still overweight by ${weight - allowable}kg. Please remove more.`);
    } else if (weight === allowable) {
      alert("✅ Perfect! Baggage now meets the 50kg limit.");
    } else {
      alert(`✅ Baggage now under limit (${weight}kg). You may add ${allowable - weight}kg if desired.`);
    }
  }

  result.textContent = `Final baggage weight: ${weight}kg.`;
}
