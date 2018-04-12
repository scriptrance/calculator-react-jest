import CalcCommand from '../commands/CalcCommand'
const calc = new CalcCommand

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
*
* @return value - the value that results after calculate is executed on all button values
*/

function pressButtons(buttons){
  let value = 0;
  buttons.forEach((button) => {
    value = calc.calculate(button, value);
  });

  return value;
}

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
* @param expectation - the value that os expected as a result of the calculation
*
*/

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).toEqual(expectation);
  calc.reset();
}

// tests based on various combination of button clicks

it('should support 6', () => {
  expectButtons(['6'], '6');
});

it('should support 65', () => {
  expectButtons(['6','5'], '65');
});

it('should support 6 + 5', () => {
  expectButtons(['6','+','5'], '5');
});

it('should support addition', () => {
  expectButtons(['6','+','9','='], 15);
});

it('should support subtraction', () => {
  expectButtons(['15','-','9','='], 6);
});

it('should support nultiplication', () => {
  expectButtons(['6','*','9','='], 54);
});

it('should support division', () => {
  expectButtons(['63','/','9','='], 7);
});

it('should support Clear', () => {
  expectButtons(['C'], 0);
});
