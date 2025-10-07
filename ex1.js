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
