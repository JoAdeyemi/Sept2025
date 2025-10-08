// Function to check baggage weight
function check() {
    let weight = parseInt(document.getElementById("weight").value);

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
    } else if (weight <= 50) {
        alert("Baggage weight is " + weight + "kg. Allowed.");
    } else {
        alert("Baggage weight is " + weight + "kg. Overweight!");
        handleExcess(weight);
    }
}

// Function to handle overweight baggage
function handleExcess() {
   const remove = parseFloat(document.getElementById("remove").value);
   const resultDiv = document.getElementById("result");
   const excessSection = document.getElementById("excessSection");

  if (isNaN(remove) || remove <= 0) {
    resultDiv.innerHTML = "<span class='warn'>⚠️ Please enter a valid amount to remove!</span>";
    return;
  }

  const newWeight = currentWeight - remove;

  if (newWeight === 50) {
    resultDiv.innerHTML = `<span class='ok'>✅ OK! Your baggage is now exactly 50kg.</span>`;
    excessSection.style.display = "none";
  } else if (newWeight > 50) {
    const stillExcess = newWeight - 50;
    resultDiv.innerHTML = `<span class='warn'>❌ Still overweight! You need to remove ${stillExcess}kg more.</span>`;
  } else {
    resultDiv.innerHTML = `<span class='ok'>✅ Good! Your baggage is now ${newWeight}kg, under the limit.</span>`;
    excessSection.style.display = "none";
  }
}