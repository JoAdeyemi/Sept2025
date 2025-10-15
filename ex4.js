function processFactorsAndMultiples(input) {
      const [factorsPart, multiplesPart] = input.split(':').map(part => part.trim());
      const factors = factorsPart.split(' ').map(Number);
      const multiples = multiplesPart.split(' ').map(Number);

      const isDivisible = (num) => factors.some(f => num % f === 0);
      const result = multiples.filter(isDivisible).reduce((sum, n) => sum + n, 0);

      return `${result} : ${factors.join(' ')} : ${multiples.join(' ')}`;
    }

    function handleProcess() {
      const input = document.getElementById('inputString').value.trim();
      if (!input.includes(':')) {
        document.getElementById('output').innerText = "⚠️ Invalid format. Use 'factors : multiples'.";
        return;
      }
      const output = processFactorsAndMultiples(input);
      document.getElementById('output').innerText = output;
    }