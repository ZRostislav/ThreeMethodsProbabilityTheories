function calculateAmn() {
  var mInput = document.getElementById("mInput");
  var nInput = document.getElementById("nInput");
  var historyElement = document.getElementById("historyPermutations");

  var m = parseInt(mInput.value);
  var n = parseInt(nInput.value);

  if (!isNaN(m) && m >= 0 && !isNaN(n) && n >= 0 && m <= n) {
    var formula = "A_" + m + "^" + n + " = " + calculateAmnFormula(m, n);
    var result = "A_" + m + "^" + n + " = " + calculateAmnResult(m, n);
    var entry = "<p>\\[" + formula + " = " + result + "\\]</p>";

    // Check the number of existing entries
    var existingEntries = historyElement.getElementsByTagName("p").length;
    var maxEntries = 3;

    // Remove the oldest entry if the limit is exceeded
    if (existingEntries >= maxEntries) {
      historyElement.removeChild(historyElement.lastChild);
    }

    historyElement.innerHTML = entry + historyElement.innerHTML;

    // Update MathJax
    MathJax.typeset();
  } else {
    alert("Пожалуйста, введите корректные значения для m и n.");
  }
}

function calculateAmnFormula(m, n) {
  return "\\frac{" + m + "!}{" + (n - m) + "!}";
}

function calculateAmnResult(m, n) {
  var numerator = factorial(n);
  var denominator = factorial(n - m);
  return numerator / denominator;
}

// Функция факториала (можно использовать ту же функцию, что и на предыдущей странице)
function factorial(k) {
  if (k === 0 || k === 1) {
    return 1;
  } else {
    return k * factorial(k - 1);
  }
}
