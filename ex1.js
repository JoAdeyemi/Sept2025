function check() {
    let weight = parseInt(document.getElementById("weight").value);

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
    } else if (weight <= 50) {
        alert("Baggage weight is " + weight + "kg is Allowed.");
    } else {
        alert("Baggage weight is " + weight + "kg is Overweight!");
    }
}