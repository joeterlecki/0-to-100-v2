const NumberController = (function () {
  return {
    getNumberList: function (startNumber, endNumber) {
      let numbers = [];
      for (let number = startNumber; number <= endNumber; number++) {
        numbers.push(number);
      }
      return numbers;
    }
  }
})();

const UIController = (function () {
  const uiSelectors = {
    startNumberInput: '#startNumber',
    endNumberInput: '#endNumber',
    submitButton: '#btn-submit',
    tableResults: '#results',
  }

  return {
    getSelectors: function () {
      return uiSelectors
    },
    getNumberInput: function () {
      return {
        startNumber: document.querySelector(uiSelectors.startNumberInput).value,
        endNumber: document.querySelector(uiSelectors.endNumberInput).value
      }
    },
    setPrimaryText: function () {
      const classList = 'text-primary text-gradient text-xs font-weight-bold';
      return classList;
    },
    setSecondaryText: function () {
      const classList = 'text-secondary text-xs';
      return classList;
    },
    populateNumbers: function (numbers) {
      let tableRows = '';
      for (let number = 0; number < numbers.length; number++) {

        if (number % 2 === 0) {
          tableRows += `<tr><td class="align-middle text-center"><span class=${UIController.setPrimaryText()}>${number}</span></td></tr>`;
        } else {
          tableRows += `<tr><td class="align-middle text-center"><span class=${UIController.setSecondaryText()}>${number}</span></td></tr>`;
        }      }
      document.querySelector(uiSelectors.tableResults).innerHTML = tableRows;
    }
  }
})();

const AppController = (function (UIController, NumberController) {
  const loadEventListeners = function () {
    const uiSelectors = UIController.getSelectors()
    document.querySelector(uiSelectors.submitButton).addEventListener('click', submitNumbers )
  }

  const submitNumbers = function (event) {
    const input = UIController.getNumberInput();
    const numberArray = NumberController.getNumberList(input.startNumber, input.endNumber);
    UIController.populateNumbers(numberArray);

    event.preventDefault();
  }

  return {
    init: function () {
      loadEventListeners();
    }
  }
})(UIController, NumberController);

AppController.init();