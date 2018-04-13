/**
 * The CalcButton class is component that renders as a button that holds
 * the appropriate int of operation values
 *
 */
import React,{Component} from 'react'

export default class CalcButton extends Component{
  /**
  * This method is used to render and display the button component
  *
  * @return input - button element displaying the appropriate value
  *
  */
  render(){
    return(
      <input className="calc-btn" type="button" value={this.props.label} onClick={this.clickHandler}/>
    )
  }
  /**
  * This method is used to render and display the button component
  *
  * @param e - event payload
  *
  */
  clickHandler = (e) => {
    this.props.clickedHandler(e.target.value);
  }
}
