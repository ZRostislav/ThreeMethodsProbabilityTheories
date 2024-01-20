function factorialPER(n) {
  if (n === 0 || n === 1) {
    return "1";
  } else {
    return n + " * " + factorialPER(n - 1);
  }
}

function calculateFactorial() {
  var inputElement = document.getElementById("numberInput");
  var historyElement = document.getElementById("historyPermutation");

  var n = parseInt(inputElement.value);

  if (!isNaN(n) && n >= 0) {
    var formula = "\\(P" + "_" + n + " = " + factorialPER(n) + "\\)";
    var result = "\\(P" + "_" + n + " = " + eval(factorialPER(n)) + "\\)";
    var entry = "<p>" + formula + " = " + result + "</p>";

    historyElement.innerHTML = entry + historyElement.innerHTML;

    // Удаление последних трех записей из истории
    var entries = historyElement.getElementsByTagName("p");
    if (entries.length > 3) {
      for (var i = 0; i < 1; i++) {
        historyElement.removeChild(entries[entries.length - 1]);
      }
    }
    MathJax.typeset();
  } else {
    alert("Пожалуйста, введите неотрицательное число.");
  }
}
