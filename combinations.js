function calculateCmn() {
  var mInput = document.getElementById("mInputC");
  var nInput = document.getElementById("nInputC");
  var historyElement = document.getElementById("historyCombinations");

  var m = parseInt(mInput.value);
  var n = parseInt(nInput.value);

  if (!isNaN(m) && m >= 0 && !isNaN(n) && n >= 0 && m >= n) {
    var formula =
      "C_{" + "m" + "}^{" + "n" + "} = " + calculateCmnFormula(m, n);
    var simplifiedFormula =
      "C_{" + m + "}^{" + n + "} = " + simplifyFormula(m, n);
    var entry =
      "<p>\\[" + formula + " = " + calculateCmnResult(m, n) + "\\]</p>";

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
    alert(
      "Пожалуйста, введите корректные значения для (m) и (n). Убедитесь, что (m geq n)."
    );
  }
}

function simplifyFormula(m, n) {
  return "m!/((m-n)! \\cdot n!)";
}

function calculateCmnFormula(m, n) {
  var result = calculateCmnResult(m, n);

  if (result === 1) {
    return (
      "C_{" +
      m +
      "}^{" +
      n +
      "} =" +
      "\\frac{m!}{(m-n)! \\cdot n!} = " +
      "\\frac{" +
      m +
      "!}{(" +
      m +
      "-" +
      n +
      ")! \\cdot " +
      n +
      "!} = " +
      "\\frac{" +
      m +
      "!" +
      "}{" +
      (m - n) +
      "!" +
      " \\cdot " +
      n +
      "!" +
      "}" +
      "=" +
      "  \\frac{" +
      "1" +
      "}{" +
      factorialExpression(m - n) +
      " \\ " +
      "}"
    );
  } else {
    var numeratorExpression = factorialExpressionRange(m - n + 1, m);
    var denominatorExpression = factorialExpressionRange(1, n);

    return (
      "C_{" +
      m +
      "}^{" +
      n +
      "} =" +
      "\\frac{m!}{(m-n)! \\cdot n!} = " +
      "\\frac{" +
      m +
      "!}{(" +
      m +
      "-" +
      n +
      ")! \\cdot " +
      n +
      "!} = " +
      "\\frac{" +
      m +
      "!" +
      "}{" +
      (m - n) +
      "!" +
      " \\cdot " +
      n +
      "!" +
      "}" +
      "=" +
      "\\frac{" +
      numeratorExpression +
      "}{" +
      denominatorExpression +
      "}"
    );
  }
}

// Функция формирования произведения в заданном диапазоне
function factorialExpressionRange(start, end) {
  var count = end - start + 1;
  if (count === 1) {
    return start;
  } else {
    return start + " \\cdot " + factorialExpressionRange(start + 1, end);
  }
}

function calculateCmnResult(m, n) {
  var numerator = factorial(m);
  var denominator = factorial(m - n) * factorial(n);
  return numerator / denominator;
}

// Функция факториала с выводом формулы в виде произведения
function factorialExpression(k) {
  if (k === 0) {
    return 1;
  } else if (k === 1) {
    return k;
  } else {
    return factorialRange(1, k);
  }
}

// Функция формирования произведения
function factorialRange(start, end) {
  var result = "";
  for (var i = start; i <= end; i++) {
    result += (i !== start ? " \\cdot " : "") + i;
  }
  return result;
}

// Функция факториала (можно использовать ту же функцию, что и на предыдущих страницах)
function factorial(k) {
  if (k === 0 || k === 1) {
    return 1;
  } else {
    return k * factorial(k - 1);
  }
}
