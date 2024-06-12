document.addEventListener("DOMContentLoaded", function () {
  const functionSelect = document.getElementById("functionSelect");
  const inputsContainer = document.getElementById("inputs");
  const submitBtn = document.getElementById("submitBtn");
  const resultDiv = document.getElementById("result");
  functionSelect.addEventListener("change", function () {
    const selectedValue = functionSelect.value;
    const numInputs = getNumberOfInputs(selectedValue);
    renderInputs(numInputs);
  });

  submitBtn.addEventListener("click", function () {
    const selectedValue = functionSelect.value;
    const result = getResult(selectedValue);
    resultDiv.textContent = "Result: " + result;
  });

  function getNumberOfInputs(selectedValue) {
    switch (selectedValue) {
      case "1":
      case "4":
      case "6":
        return 1;
      case "2":
        return 3;
      case "3":
      case "5":
        return 3;
      default:
        return 0;
    }
  }

  function renderInputs(numInputs) {
    inputsContainer.innerHTML = "";
    for (let i = 0; i < numInputs; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = "Enter value";
      inputsContainer.appendChild(input);
    }
    inputsContainer.classList.remove("hidden");
  }

  function getResult(selectedValue) {
    switch (selectedValue) {
      case "1":
        const number1 = parseFloat(inputsContainer.children[0].value);
        return checkEvenOrOdd(number1);
      case "2":
        const number2 = parseFloat(inputsContainer.children[0].value);
        const number3 = parseFloat(inputsContainer.children[1].value);
        const number4 = parseFloat(inputsContainer.children[2].value);
        return findLargestNumber(number2, number3, number4);
      case "3":
        const side1 = parseFloat(inputsContainer.children[0].value);
        const side2 = parseFloat(inputsContainer.children[1].value);
        const side3 = parseFloat(inputsContainer.children[2].value);
        return checkTriangleType(side1, side2, side3);
      case "4":
        const number5 = parseFloat(inputsContainer.children[0].value);
        return checkNumberType(number5);
      case "5":
        const num1 = parseFloat(inputsContainer.children[0].value);
        const num2 = parseFloat(inputsContainer.children[1].value);
        const num3 = parseFloat(inputsContainer.children[2].value);
        return checkOrder(num1, num2, num3);
      case "6":
        const dayNumber = parseInt(inputsContainer.children[0].value);
        return getDayName(dayNumber);
      default:
        return "Invalid choice, Please try again.";
    }
  }

  function checkEvenOrOdd(number) {
    return number % 2 === 0 ? `${number} is Even` : `${number} is Odd`;
  }

  function findLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

  function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }

  function checkNumberType(number) {
    if (number === 0) {
      return "zero";
    } else if (number > 0) {
      return "positive";
    } else {
      return "negative";
    }
  }

  function checkOrder(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
      return "increasing";
    } else if (num1 > num2 && num2 > num3) {
      return "decreasing";
    } else {
      return "Neither increasing nor decreasing order";
    }
  }

  function getDayName(dayNumber) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayNumber - 1];
  }
});
