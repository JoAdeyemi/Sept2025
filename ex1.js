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
function handleExcess(weight) {
    let excess = weight - 50;
    alert("Excess weight: " + excess + "kg. You need to remove some weight.");

    // Ask user how much weight they want to remove
    let remove = parseInt(prompt("Enter how many kg you will remove:"));

    if (isNaN(remove) || remove <= 0) {
        alert("Invalid input. Please enter a valid number greater than 0.");
        return;
    }

    let newWeight = weight - remove;

    if (newWeight === 50) {
        alert("OK ✅. Your baggage is now exactly 50kg.");
    } else if (newWeight > 50) {
        alert("Still overweight! You need to remove " + (newWeight - 50) + "kg more.");
    } else {
        alert("Good ✅. Your baggage is now " + newWeight + "kg, under the limit.");
    }
}