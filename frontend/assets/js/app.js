function getNumbers() {
    let startNumber = document.getElementById("startNumber").value;
    let endNumber = document.getElementById("endNumber").value;

    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber);

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
        generateNumberArray(startNumber, endNumber);

    } else {
        alert("You Must Enter A Valid Integer");
    }
}

function generateNumberArray(startNumber, endNumber) {
    const url = `https://api.joeterlecki.io/0-to-100?start_number=${startNumber}&end_number=${endNumber}`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let numbers = data["number_list"];
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
        })
}