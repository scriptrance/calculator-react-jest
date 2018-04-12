/**
 * The CalculateCommand class holds the methods to calculate resultant values based
 * on the buttons clicked by the user
 *
 *
 */

import Utils from '../utils/Utils'
export default class CalculateCommand{
  constructor()
  {
    this.currentDisplayValue = 0; //stores the current displayed value
    this.lastDisplayValue = 0; //stores the last displayed value
    this.isNextNumber = false; //flag to indicate that the next number will be entered after selecting an operation
    this.currentOperation = null; //store the currently selected operation
    this.currentData = 0; //stores the data object in the current state
  }

  /**
  * This method resets all the variables to default values
  *
  */
  reset()
  {
    this.currentDisplayValue = 0;
    this.lastDisplayValue = 0;
    this.isNextNumber = false;
    this.currentOperation = null;
    this.currentData = 0;
  }

  /**
  * This method calculates and returns the final value based on the buttons clicked
  *
  * @param value - value of the button clicked
  * @param data - value of data from current state
  *
  * @return currentDisplayValue - the calclated resultant value
  */
  calculate(value, data)
  {
    this.currentData = data;
    //checks if any of the operation buttons are clicked and carries our appropriate logic
    if(["+","-","*","/","=","C"].indexOf(value) != -1)
    {
      //when the clear 'C' button is cliked
      if(value == "C")
      {
        this.reset();
        return this.currentDisplayValue;
      }

      if(this.currentDisplayValue == 0 || this.currentOperation == null)
      {
        this.currentOperation = value;
        this.currentDisplayValue = this.currentData
        this.lastDisplayValue = this.currentDisplayValue
      }
      else
      {

        //switch case to execute appropriate util method based on the button clicked
        switch(this.currentOperation){
          case "+":
            this.currentDisplayValue = Utils.add(Number(this.currentDisplayValue), Number(this.lastDisplayValue))

          break;
          case "-":
            this.currentDisplayValue = Utils.sub(Number(this.lastDisplayValue), Number(this.currentDisplayValue))

          break;
          case "*":
            this.currentDisplayValue = Utils.mul(Number(this.currentDisplayValue), Number(this.lastDisplayValue))

          break;
          case "/":
            this.currentDisplayValue = Utils.div(Number(this.lastDisplayValue), Number(this.currentDisplayValue))

          break;

        }
        this.lastDisplayValue = this.currentDisplayValue
        this.currentOperation = value;
      }
      this.isNextNumber = true
      return this.currentDisplayValue;
    }

    if(this.currentData == "0" || this.isNextNumber == true){
      this.isNextNumber = false;
      this.currentDisplayValue = String(value);
    }
    else
    {
      this.currentDisplayValue = String(this.currentData) + String(value);
    }
    return this.currentDisplayValue;
  }
}
