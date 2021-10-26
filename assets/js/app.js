function getNumbers() {
  let startNumber = document.getElementById("startNumber").value;
  let endNumber = document.getElementById("endNumber").value;

  startNumber = parseInt(startNumber);
  endNumber = parseInt(endNumber);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
    let numbers = generateNumbers(startNumber, endNumber);

    displayNumbers(numbers);

  } else {
    alert("You Must Enter A Valid Integer");
  }
}

function generateNumbers(startNumber, endNumber) {
  let numbers = [];

  for (let number = startNumber; number <= endNumber; number++) {
    numbers.push(number);
  }

  return numbers;
}

function displayNumbers(numbers) {
  let templateRows = "";
  for (let number = 0; number < numbers.length; number++) {
    let displayNumber = numbers[number];

    if (displayNumber % 2 === 0) {
      templateRows += `<tr><td class="align-middle text-center"><span class="text-primary text-gradient text-xs font-weight-bold">${displayNumber}</span></td></tr>`;
    } else {
      templateRows += `<tr><td class="align-middle text-center"><span class="text-secondary text-xs">${displayNumber}</span></td></tr>`;
    }

  }

  document.getElementById("results").innerHTML = templateRows;

}