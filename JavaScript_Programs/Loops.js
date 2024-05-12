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

function menu() {
  console.log("\n\n1. Check Even or Odd");
  console.log("2. Find Largest Number");
  console.log("3. Check Triangle Type");
  console.log("4. Check Number Type");
  console.log("5. Check Order of Numbers");
  console.log("6. Get Day Name");
  console.log("0. Exit");
  const choice = prompt("Enter your choice: ");

  switch (choice) {
    case "1":
      const number1 = parseInt(prompt("Enter a number: "));
      console.log("Result:", checkEvenOrOdd(number1));
      break;
    case "2":
      const number2 = parseInt(prompt("Enter the first number: "));
      const number3 = parseInt(prompt("Enter the second number: "));
      const number4 = parseInt(prompt("Enter the third number: "));
      console.log("Result:", findLargestNumber(number2, number3, number4));
      break;
    case "3":
      const side1 = parseInt(prompt("Enter the first side length: "));
      const side2 = parseInt(prompt("Enter the second side length: "));
      const side3 = parseInt(prompt("Enter the third side length: "));
      console.log("Result:", checkTriangleType(side1, side2, side3));
      break;
    case "4":
      const number5 = parseFloat(prompt("Enter a floating-point number: "));
      console.log("Result:", checkNumberType(number5));
      break;
    case "5":
      const num1 = parseInt(prompt("Enter the first number: "));
      const num2 = parseInt(prompt("Enter the second number: "));
      const num3 = parseInt(prompt("Enter the third number: "));
      console.log("Result:", checkOrder(num1, num2, num3));
      break;
    case "6":
      const dayNumber = parseInt(prompt("Enter the day number (1-7): "));
      console.log("Result:", getDayName(dayNumber));
      break;
    case "0":
      console.log("Thank You ");
      console.log("Created by Aakash Jha ");
      console.log("Exiting.....");
      return;
    default:
      console.log("Invalid choice, Please try again.");
  }
  menu();
}