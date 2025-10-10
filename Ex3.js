 function findSum() {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let limit = parseInt(document.getElementById("limit").value);

      if (isNaN(num1) || isNaN(num2) || isNaN(limit)) {
        alert("Please enter valid numbers!");
        return;
      }

      let sum = 0;
      for (let i = 1; i < limit; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
          sum += i;
        }
      }

      document.getElementById("result").innerText =
      `The sum of all multiples of ${num1} or ${num2} below ${limit} is ${sum}.`;
    }

 
}